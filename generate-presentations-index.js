const fs = require('fs');
const csv = require('csv-parser');

const presentations = [];

fs.createReadStream('presentations.csv')
    .pipe(csv())
    .on('data', (row) => {
        presentations.push(row);
    })
    .on('end', () => {
        // Sort presentations by date in descending order
        presentations.sort((a, b) => new Date(b.date) - new Date(a.date));

        let markdownEN = '# Presentations\n\n';
        let markdownJP = '# プレゼンテーション\n\n'; // Translated "Presentations"

        markdownEN += '| Title | Date | Speaker | Keywords |\n';
        markdownEN += '| ----- | ---- | ------- | -------- |\n';

        markdownJP += '| タイトル | 日付 | スピーカー | キーワード |\n'; // Translated headers
        markdownJP += '| ------ | ---- | -------- | -------- |\n';

        presentations.forEach((presentation) => {
            let presentationRow = `| [${presentation['presentation title']}](${presentation.link}) | ${presentation.date} | ${presentation.speaker} | ${presentation.keywords} |\n`;
            markdownEN += presentationRow;
            markdownJP += presentationRow;
        });

        fs.writeFileSync('docs/resources/presentations/index.md', markdownEN);
        fs.writeFileSync('i18n/ja/docusaurus-plugin-content-docs/current/resources/presentations/index.md', markdownJP);
        console.log('Markdown files have been updated successfully! 🎉');
    });
