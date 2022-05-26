require('dotenv').config();
const Airtable = require('airtable');

Airtable.configure({
	apiKey: process.env.AIRTABLE_API_KEY,
});
const base = require('airtable').base(process.env.AIRTABLE_BASE);
const catsTable = base(process.env.AIRTABLE_TABLE_MAIN);

module.exports = { catsTable };
