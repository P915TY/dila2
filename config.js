const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "dzUSQboI#Dbm3GKemFrjT4QVDt46H76e4zHrwlt_HwjGRlQ3mQXw",
MONGODB: process.env.MONGODB || "mongodb://mongo:wjZXtPKVoyCuzlUVtNWNCKjxpTPAHcTf@autorack.proxy.rlwy.net:36246",
};

