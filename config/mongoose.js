const mongoose = require('mongoose');

// Connect to MongoDB using environment variables
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind error event to the console
db.on('error', console.error.bind(console, 'connection error:'));

// Bind connection event to the console
db.once('open', function() {
  console.log("Connected to MongoDB database!");
});
