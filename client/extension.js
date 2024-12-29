const path = require('path');
const vscode = require('vscode');
const {
	LanguageClient,
	TransportKind
} = require('vscode-languageclient');

let client;

function activate(context)
{
	//const outputChannel = vscode.window.createOutputChannel('BOS Language Server');
	//outputChannel.show();

	let serverModule = context.asAbsolutePath(path.join('server', 'server.js'));

	// Server options
	let serverOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
			options: { execArgv: ['--nolazy', '--inspect=6009'] }
		}
	};

	// Client options
	let clientOptions = {
		documentSelector: [{ scheme: 'file', language: 'bos' }],
		synchronize: {
			configurationSection: 'bos',
			fileEvents: vscode.workspace.createFileSystemWatcher('**/*.bos')
		}
		//outputChannel: outputChannel
	};

	client = new LanguageClient(
		'bosLanguageServer',
		'BOS Language Server',
		serverOptions,
		clientOptions
	);

	client.start();
}

function deactivate()
{
	if (!client)
	{
		return undefined;
	}
	return client.stop();
}

module.exports = {
	activate,
	deactivate
};
