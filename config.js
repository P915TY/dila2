const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Q6VxxJAa#LMwplmN8ZVmpK4OiGZUY1EaMK1LBa4rZRt_gdmjJRWo",
MONGODB: process.env.MONGODB || "mongodb://mongo:IvmKbPiVfZSLbUjxcImpNwpJVwZZbAqg@autorack.proxy.rlwy.net:35245",
};
