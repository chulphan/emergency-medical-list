// #1. Import mongoose
const mongoose = require("mongoose");

// #2. Create a query string to connect to MongoDB Server.
const DB_URI = "mongodb://localhost:27017/emergency-info";

// #3. Connect to MongoDB
mongoose.connect(DB_URI, { useNewUrlParser: true });

// #4. Add basic event listeners on the mongoose.connection object
mongoose.connection.once("open", () =>
  console.log("Connected to a MongoDB instance")
);
mongoose.connection.on("error", error => console.log(error));

// #5. Export mongoose. You'll use it in server/server.js file
module.exports = mongoose;
