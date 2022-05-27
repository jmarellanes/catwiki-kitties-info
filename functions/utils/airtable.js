require('dotenv').config();
const Airtable = require('airtable');

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
	process.env.AIRTABLE_BASE,
);
const catsTable = base(process.env.AIRTABLE_TABLE_MAIN);

module.exports = { catsTable };
