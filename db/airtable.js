const Airtable = require('airtable');
Airtable.configure({
  requestTimeout: 30 * 1000, // 30 seconds
});

const microchurchBase = process.env.AIRTABLE_BASE_ID;
const base = new Airtable().base(microchurchBase);
module.exports = base;
