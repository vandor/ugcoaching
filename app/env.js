const envalid = require('envalid');
const config = require('../config');
const { port, str, url } = envalid;
const env = envalid.cleanEnv(process.env, {
  NODE_ENV: str({
    choices: ['development', 'production'],
    default: 'development',
  }),
  PORT: port({ default: config.dev.port }),
  AIRTABLE_API_KEY: str({ desc: "Must supply an Airtable API Key" }),
  AIRTABLE_BASE_ID: str({ desc: "Must supply the ID of the Microchurch base" }),
  AUTH0_CALLBACK_URL: url({ devDefault: "http://localhost:" + process.env.PORT || config.dev.port }),
  AUTH0_CLIENT_SECRET: str(),
  AUTH0_DOMAIN: str(),
},{
  strict: true,
  dotEnvPath: null,
});

module.exports = env;
