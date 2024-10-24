const {
    createConnection,
    TextDocuments,
    ProposedFeatures,
    DiagnosticSeverity
} = require('vscode-languageserver');
const { TextDocument } = require('vscode-languageserver-textdocument');
const antlr4 = require('antlr4');
const BosLexer = require('./BosLexer');
const BosParser = require('./BosParser');

const fs = require('fs');
const path = require('path');
const URI = require('vscode-uri').URI;

const connection = createConnection(ProposedFeatures.all);

connection.console.log('BOS Language Server is starting...');

const documents = new TextDocuments(TextDocument);

class ErrorListener extends antlr4.default.error.ErrorListener
{
    constructor()
    {
        super();
        this.errors = [];
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg, e)
    {
        console.log("syntaxError")
        console.log(recognizer, offendingSymbol, line, column, msg, e)

        let errorMessage = msg;
        let startLine = line;
        let startColumn = column;
        let endLine = line;
        let endColumn = column + 1;

        if (offendingSymbol)
        {
            startLine = offendingSymbol.line - 1;
            startColumn = offendingSymbol.column;
            endLine = offendingSymbol.line - 1;
            endColumn = offendingSymbol.column + (offendingSymbol.stop - offendingSymbol.start + 1);
        }

        if (msg.includes("missing"))
        {
            const lastToken = recognizer._ctx.start;
            startLine = lastToken.line - 1;
            startColumn = lastToken.stop - 1;
            endLine = lastToken.line - 1;
            endColumn = lastToken.stop;

           /* if (msg.includes("';'"))
            {
                errorMessage = "It looks like you're missing a semicolon here.";
            } else
            {*/
                errorMessage = `It looks like you're missing something: ${msg}`;
           // }
        } else if (msg.includes("extraneous input"))
        {
            errorMessage = `Extraneous input detected: ${msg}`;
        } else if (e instanceof antlr4.default.error.InputMismatchException)
        {
            const expectedTokens = recognizer.getExpectedTokens().toString(recognizer.literalNames, recognizer.symbolicNames);
            errorMessage = `Unexpected token '${offendingSymbol.text}', expected one of: ${expectedTokens}`;
        } else if (e instanceof antlr4.default.error.NoViableAltException)
        {
            errorMessage = `Unexpected construct at line ${line}, column ${column}`;
        }

        this.errors.push({
            line: startLine,
            column: startColumn,
            endLine: endLine,
            endColumn: endColumn,
            message: errorMessage
        });


        /*
        // direct error report
        this.errors.push({
            line,
            column,
            message: msg
        });*/
    }

    getErrors()
    {
        return this.errors;
    }
}

documents.onDidChangeContent(change =>
{
    validateBosFile(change.document);
});

connection.onInitialize((params) =>
{
    connection.console.log('Server initialized');
    const capabilities = params.capabilities;

    const workspaceCapabilities = {
        textDocumentSync: documents.syncKind,
        workspace: {
            workspaceFolders: !!capabilities.workspace?.workspaceFolders
        }
    };

    return {
        capabilities: workspaceCapabilities
    };
});

connection.onInitialized(() =>
{
    connection.console.log('Watching for .bos files in the workspace...');

    connection.client.register({
        method: 'workspace/didChangeWatchedFiles',
        registerOptions: {
            watchers: [
                { globPattern: '**/*.bos' }
            ]
        }
    });

    analyzeAllBosFiles();
});

connection.onDidChangeWatchedFiles((change) =>
{
    connection.console.log('Changes detected in .bos files');

    change.changes.forEach((fileChange) =>
    {
        const uri = fileChange.uri;
        const content = fs.readFileSync(URI.parse(uri).fsPath, 'utf8');
        const document = TextDocument.create(uri, 'bos', 1, content);

        validateBosFile(document);
    });
});


documents.listen(connection);
connection.listen();

function validateBosFile(textDocument)
{
    connection.console.log('validateBosFile ' + textDocument.uri);

    const diagnostics = [];
    const input = textDocument.getText();
    const chars = new antlr4.InputStream(input);
    const lexer = new BosLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new BosParser(tokens);
    parser.buildParseTrees = true;

    const errorListener = new ErrorListener();
    lexer.removeErrorListeners();
    lexer.addErrorListener(errorListener);
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    try
    {
        parser.file();

        const errors = errorListener.getErrors();

        if (errors.length > 0)
        {
            errors.forEach(error =>
            {
                const diagnostic = {
                    severity: DiagnosticSeverity.Error,
                    range: {
                        start: {
                            line: error.line,
                            character: error.column
                        },
                        end: {
                            line: error.endLine,
                            character: error.endColumn
                        }
                    },
                    message: error.message,
                    source: "bos-parser"
                };
                connection.console.log("Logged " + textDocument.uri + ": " + error.line + " " + error.column + " " + error.endLine + " " + error.endColumn + " - " + error.message)
                /*const diagnostic = {
                    severity: DiagnosticSeverity.Error,
                    range: {
                        start: {
                            line: error.line - 1,
                            character: error.column - 1
                        },
                        end: {
                            line: error.line - 1,
                            character: error.column
                        }
                    },
                    message: error.message,
                    source: "bos-parser"
                };*/
                diagnostics.push(diagnostic);
            });
        }
    } catch (e)
    {
        connection.console.log("error")
        const diagnostic = {
            severity: DiagnosticSeverity.Error,
            range: {
                start: textDocument.positionAt(0),
                end: textDocument.positionAt(input.length)
            },
            message: "Error in the extension logic: " + e.message,
            source: "bos-parser"
        };
        diagnostics.push(diagnostic);
    }

    connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}


async function analyzeAllBosFiles()
{
    const workspaceFolders = await connection.workspace.getWorkspaceFolders();

    if (workspaceFolders)
    {
        for (const folder of workspaceFolders)
        {
            const folderUri = folder.uri;
            const folderPath = URI.parse(folderUri).fsPath;

            findBosFiles(folderPath).forEach((filePath) =>
            {
                const content = fs.readFileSync(filePath, 'utf8');
                const document = TextDocument.create(URI.file(filePath).toString(), 'bos', 1, content);

                validateBosFile(document);
            });
        }
    }
}

function findBosFiles(dir)
{
    let bosFiles = [];
    const files = fs.readdirSync(dir);

    files.forEach(file =>
    {
        const fullPath = path.join(dir, file);

        if (fs.statSync(fullPath).isDirectory())
        {
            bosFiles = bosFiles.concat(findBosFiles(fullPath));
        } else if (fullPath.endsWith('.bos'))
        {
            bosFiles.push(fullPath);
        }
    });

    return bosFiles;
}
