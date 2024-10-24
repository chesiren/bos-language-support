const antlr4 = require('antlr4');
const BosLexer = require('./BosLexer');

const input = "some bos script text";
const chars = new antlr4.InputStream(input);
const lexer = new BosLexer(chars);

console.log(lexer);
