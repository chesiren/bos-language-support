const fs = require('fs');
const path = require('path');

const files = ['BosLexer.js', 'BosParser.js', 'BosListener.js'];

files.forEach(file =>
{
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');

    content = content.replace(/import\s+(.*?) from (.*?);/g, (match, p1, p2) =>
    {
        return `const ${p1} = require(${p2}).default;\n`;
    });

    content = content.replace(/export default\s+/g, '');

    if (content.includes('class'))
    {
        content += `\nmodule.exports = ${file.replace('.js', '')};\n`;
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file} to CommonJS format.`);
});
