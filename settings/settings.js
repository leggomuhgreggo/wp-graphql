const env = process.env.NODE_ENV;
const settings = require('./dev.json');

const publicSettings = settings.public;
const privateSettings = settings.private;

export { publicSettings, privateSettings };
