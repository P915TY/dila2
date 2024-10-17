const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "iRMxRL6a#uxvHlbZ3KQCFApavZfejYF0eb4zzFdHh3nfMRUQ1yiI",
MONGODB: process.env.MONGODB || "mongodb://mongo:DlOCGyDGoqjphuwoLCFSPyVLFPTahCyl@autorack.proxy.rlwy.net:58219",
};
