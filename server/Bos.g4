grammar Bos;

options {
}

D_DEFINE: '#define';
D_INCLUDE: '#include';
D_UNDEF: '#undef';
D_IFDEF: '#ifdef';
D_IFNDEF: '#ifndef';
D_ENDIF: '#endif';
D_IF: '#if';
D_ELSE: '#else';

MOVE: 'move';
TURN: 'turn';
SPIN: 'spin';
STOP_SPIN: 'stop-spin';
SHOW: 'show';
HIDE: 'hide';
CACHE: 'cache';
DONT_CACHE: 'dont-cache';
DONT_SHADOW: 'dont-shadow';
DONT_SHADE: 'dont-shade';
EMIT_SFX: 'emit-sfx';
SLEEP: 'sleep';
WAIT_FOR_TURN: 'wait-for-turn';
WAIT_FOR_MOVE: 'wait-for-move';
EXPLODE: 'explode';
SET: 'set';
ATTACH_UNIT: 'attach-unit';
DROP_UNIT: 'drop-unit';
RETURN: 'return';
RAND: 'rand';
GET: 'get' | 'GET';
// TODO: matching uppercase GET is not supposed to happen but it seems the compiler still works with it
START_SCRIPT: 'start-script';
CALL_SCRIPT: 'call-script';

TO: 'to';
SPEED: 'speed';
NOW: 'now';
AROUND: 'around';
ALONG: 'along';
TYPE: 'type';
FROM: 'from';

IF: 'if';
ELSE: 'else';
WHILE: 'while';
FOR: 'for';

TRUE: 'TRUE';
FALSE: 'FALSE';
UNKNOWN_UNIT_VALUE: 'UNKNOWN_UNIT_VALUE';

ACCELERATE: 'accelerate';
DECELERATE: 'decelerate';

PIECE: 'piece';
STATIC_VAR: 'static-var';
VAR: 'var';
SOUND: 'sound';

SIGNAL: 'signal';
SET_SIGNAL_MASK: 'set-signal-mask';

PLUS: '+';
MINUS: '-';
MULTIPLY: '*';
DIVIDE: '/';
MODULO: '%';

EQUAL: '=';
DOUBLE_EQUAL: '==';
NOT_EQUAL: '!=';
LESS_THAN: '<';
LESS_EQUAL: '<=';
GREATER_THAN: '>';
GREATER_EQUAL: '>=';

LOGICAL_AND: '&&' | 'and' | 'AND';
LOGICAL_OR: '||' | 'or' | 'OR';
NOT: '!' | 'not' | 'NOT';

BITWISE_AND: '&';
BITWISE_OR: '|';

LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
LBRACKET: '[';
RBRACKET: ']';
COMMA: ',';
SEMICOLON: ';';

MULTI_LINE_MACRO:
	'#' (~[\n]*? '\\' '\r'? '\n')+ ~ [\n]+ -> channel(HIDDEN);

DIRECTIVE: '#' ~ [\n]* -> channel(HIDDEN);

WHITESPACE: [ \t]+ -> channel(HIDDEN);

NEWLINE: ('\r' '\n'? | '\n') -> channel(HIDDEN);

LINE_COMMENT: '//' ~[\r\n]* -> channel(HIDDEN);

BLOCK_COMMENT: '/*' .*? '*/' -> channel(HIDDEN);

// Preprocessor directives
preprocessor:
	D_DEFINE varName (IDENTIFIER | constant | STRING)?
	| D_INCLUDE STRING
	| D_UNDEF varName
	| D_IFDEF varName
	| D_IFNDEF varName
	| D_IF expression
	| D_ELSE
	| D_ENDIF;

// TODO: to mark the end of directives, the compiler does some extra check against comments and
// quotes and then adds $ instead, but not sure how to do that here. use lexer modes

// Entry point for the script
file: ( preprocessor | declaration)*;

declaration: pieceDec | staticVarDec | funcDec;

// Pieces and Variables
pieceDec: PIECE pieceName (COMMA pieceName)* SEMICOLON;
staticVarDec: STATIC_VAR varName (COMMA varName)* SEMICOLON;

// Function declaration
funcDec: funcName LPAREN arguments? RPAREN statementBlock;
arguments: varName (COMMA varName)*;

// Statements and Assignments
statementBlock: LBRACE statement* RBRACE | statement;
statement:
	assignStatement SEMICOLON
	| preprocessor // TODO: seems valid (armestor_clean.bos)
	| ifStatement
	| whileStatement
	| forStatement
	| keywordStatement SEMICOLON
	| varStatement SEMICOLON
	| definedVarStatement // TODO: define function to load from includes
	| funcCall // TODO: seems to work? see legtriariusheatray.bos
	| SEMICOLON;

assignStatement:
	varName EQUAL expression
	| incrementStatement
	| decrementStatement;

definedVarStatement: varName SEMICOLON?;

incrementStatement: PLUS PLUS varName;
decrementStatement: MINUS MINUS varName;

ifStatement:
	IF LPAREN expression RPAREN statementBlock (
		ELSE statementBlock
	)?;

whileStatement: WHILE LPAREN expression RPAREN statementBlock;

forStatement:
	FOR LPAREN expression SEMICOLON expression SEMICOLON expression SEMICOLON? RPAREN statementBlock
		;

varStatement: VAR arguments;

// Keyword-based statements
keywordStatement:
	callStatement
	| startStatement
	| spinStatement
	| stopSpinStatement
	| turnStatement
	| moveStatement
	| waitForTurnStatement
	| waitForMoveStatement
	| emitSfxStatement
	| sleepStatement
	| hideStatement
	| showStatement
	| explodeStatement
	| signalStatement
	| setSignalMaskStatement
	| setStatement
	| getStatement
	| attachUnitStatement
	| dropUnitStatement
	| returnStatement
	| playSoundStatement
	| cacheStatement
	| dontCacheStatement
	| dontShadowStatement
	| dontShadeStatement;

// Specific statement rules
callStatement:
	CALL_SCRIPT funcName LPAREN expressionList RPAREN;
startStatement:
	START_SCRIPT funcName LPAREN expressionList RPAREN;
spinStatement:
	SPIN pieceName AROUND axis SPEED expression optionalAcceleration;
optionalAcceleration: (ACCELERATE expression)?;
stopSpinStatement:
	STOP_SPIN pieceName AROUND axis optionalDeceleration;
optionalDeceleration: (DECELERATE expression)?;
turnStatement: TURN pieceName TO axis expression speedNow;
moveStatement: MOVE pieceName TO axis expression speedNow;
speedNow: (NOW | SPEED expression);
waitForTurnStatement: WAIT_FOR_TURN pieceName AROUND axis;
waitForMoveStatement: WAIT_FOR_MOVE pieceName ALONG axis;
emitSfxStatement: EMIT_SFX expression FROM pieceName;
sleepStatement: SLEEP expression;
hideStatement: HIDE pieceName;
showStatement: SHOW pieceName;
explodeStatement: EXPLODE pieceName TYPE expression;
signalStatement: SIGNAL expression;
setSignalMaskStatement: SET_SIGNAL_MASK expression;
setStatement: SET expression TO expression;
getStatement: GET expression;
// TODO: for get statement, adding 'expression' fix a lot of things it but doesn't seems to be what the compiler is actually doing
attachUnitStatement: ATTACH_UNIT expression TO expression;
dropUnitStatement: DROP_UNIT expression;
returnStatement: RETURN (expression)?;
playSoundStatement:
	SOUND LPAREN STRING (COMMA expression)? RPAREN;
cacheStatement: CACHE pieceName;
dontCacheStatement: DONT_CACHE pieceName;
dontShadowStatement: DONT_SHADOW pieceName;
dontShadeStatement: DONT_SHADE pieceName;

// Expressions, Terms, and Constants
expression: term (op term)*;
term:
	getTerm
	| LPAREN expression RPAREN
	| unaryOp term
	| varName
	| constant
	| globalConstant
	| randCall
	| funcCall; // TODO: inlined function call may be incorrect

constant:
	// TODO: Integers are not meant to be encased in <> [] according to the compiler syntax (L665 bos2cob), yet it still works, why?
	'<' (signedFloatConstant | signedIntegerConstant | varName) '>'
	| '[' (signedFloatConstant | signedIntegerConstant | varName) ']'
	| (signedFloatConstant | signedIntegerConstant);

globalConstant:
	TRUE
	| FALSE
	| UNKNOWN_UNIT_VALUE (LPAREN expression RPAREN)? (
		LPAREN expression RPAREN
	)?;
unaryOp: MINUS | NOT;
funcCall: funcName LPAREN expressionList RPAREN;
randCall: RAND LPAREN expression COMMA expression RPAREN;
commaExpression: COMMA expression;
getTerm:
	GET term LPAREN expression commaExpression? commaExpression? commaExpression? RPAREN
	| GET term;

op:
	PLUS
	| MINUS
	| MULTIPLY
	| DIVIDE
	| MODULO
	| BITWISE_AND
	| BITWISE_OR
	| LESS_THAN
	| GREATER_THAN
	| DOUBLE_EQUAL
	| LESS_EQUAL
	| GREATER_EQUAL
	| NOT_EQUAL
	| LOGICAL_AND
	| LOGICAL_OR;

expressionList: (expression (COMMA expression)*)?;

varName: IDENTIFIER;
pieceName: IDENTIFIER;
funcName: IDENTIFIER;

axis: 'x-axis' | 'y-axis' | 'z-axis';

// Literal values
signedIntegerConstant:
	MINUS INTEGER_CONSTANT
	| INTEGER_CONSTANT;
INTEGER_CONSTANT: [0-9]+ | '0' [xX] [0-9a-fA-F]+;

signedFloatConstant: MINUS FLOAT_CONSTANT | FLOAT_CONSTANT;

FLOAT_CONSTANT:
	[0-9]* '.' [0-9]+
	| [0-9]+ '.' [0-9]*; // TODO: legmech.bos L247 floats can start by a dot

IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;

STRING: '"' .*? '"';