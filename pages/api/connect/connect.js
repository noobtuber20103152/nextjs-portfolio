const mongoose = require('mongoose');
const connection = {};
const uri = "mongodb+srv://noobtuber:noobtuber@cluster0.3dnvq2i.mongodb.net/?retryWrites=true&w=majority"
async function connect() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
}

module.exports = connect;
