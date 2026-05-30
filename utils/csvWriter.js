const createCsvWriter = require('csv-writer').createObjectCsvWriter;

async function writeJobsToCSV(jobs) {

    const csvWriter = createCsvWriter({
        path: './data/jobs.csv',

        header: [
            { id: 'title', title: 'TITLE' },
            { id: 'company', title: 'COMPANY' },
            { id: 'experience', title: 'EXPERIENCE' },
            { id: 'location', title: 'LOCATION' }
        ]
    });

    await csvWriter.writeRecords(jobs);

   console.log(`Successfully exported ${jobs.length} jobs`);
}

module.exports = { writeJobsToCSV };