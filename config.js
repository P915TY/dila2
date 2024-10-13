const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "lqlVRBxJ#bmkI-G7LUF5ORQyEWJGGg3YrUv7TE5q5iWU-K8VF-Bg",
MONGODB: process.env.MONGODB || "mongodb://mongo:IvmKbPiVfZSLbUjxcImpNwpJVwZZbAqg@autorack.proxy.rlwy.net:35245",
};
