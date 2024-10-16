const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "vPAUwQbR#JG7pLPyblRsdNdND8IBZkosNhA8O3cmfUzrk3pRY2GA",
MONGODB: process.env.MONGODB || "mongodb://mongo:IvmKbPiVfZSLbUjxcImpNwpJVwZZbAqg@autorack.proxy.rlwy.net:35245",
};
