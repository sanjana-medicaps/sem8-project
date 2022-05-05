const mongoose = require("mongoose");
const config = require("config");

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://sanjana:afval21@shehacks-shard-00-00.emoti.mongodb.net:27017,shehacks-shard-00-01.emoti.mongodb.net:27017,shehacks-shard-00-02.emoti.mongodb.net:27017/procaps?ssl=true&replicaSet=atlas-qmjj8g-shard-0&authSource=admin&retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Successfully connected to MongoDB");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
