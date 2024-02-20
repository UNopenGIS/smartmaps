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

        markdownEN += '| Title | Date |Speaker | Link | Keywords |\n';
        markdownEN += '| ----- | ---- | ------- | ---- | -------- |\n';

        markdownJP += '| タイトル | 日付 | スピーカー | リンク | キーワード |\n'; // Translated headers
        markdownJP += '| ------ | ---- | -------- | ---- | -------- |\n';

        presentations.forEach((presentation) => {
            markdownEN += `| ${presentation["presentation title"]} | ${presentation.date} | ${presentation.speaker} | [Link](${presentation.link}) | ${presentation.keywords} |\n`;

            markdownJP += `| ${presentation["presentation title"]} | ${presentation.date} | ${presentation.speaker} | [リンク](${presentation.link}) | ${presentation.keywords} |\n`; // Translated "Link"
        });

        fs.writeFileSync('docs/resources/presentations/index.md', markdownEN);
        fs.writeFileSync('i18n/ja/docusaurus-plugin-content-docs/current/resources/presentations/index.md', markdownJP);
        console.log('Markdown files have been updated successfully! 🎉');
    });