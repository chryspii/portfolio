const mongoose = require('mongoose');
const connection = mongoose.connection;

module.exports = {
    resumeDB: connection.useDb('resume'),
}