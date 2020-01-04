const path = require('path');
const https = require('http');
const express = require('express');

module.exports = {
    start: function() {
        const app = express();
        app.use('/', express.static(path.join(__dirname, '../../dist/HDP-frontend')));
        const server = https.createServer(app);
        server.listen(4200);
    }
}
