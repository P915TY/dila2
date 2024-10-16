const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "jPpSGQBC#7kCS1WxIAlh28SbsHl8CdDJg_L5J9XNmo5L0cKGck_Y",
MONGODB: process.env.MONGODB || "mongodb://mongo:IvmKbPiVfZSLbUjxcImpNwpJVwZZbAqg@autorack.proxy.rlwy.net:35245",
};
