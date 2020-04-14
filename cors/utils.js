// const isDev = process.env.NODE_ENV === 'development';

const CORS_OPTIONS = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

module.exports = CORS_OPTIONS;
