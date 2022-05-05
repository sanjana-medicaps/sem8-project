const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const app = express();
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect('mongodb://sanjana:afval21@shehacks-shard-00-00.emoti.mongodb.net:27017,shehacks-shard-00-01.emoti.mongodb.net:27017,shehacks-shard-00-02.emoti.mongodb.net:27017/procaps?ssl=true&replicaSet=atlas-qmjj8g-shard-0&authSource=admin&retryWrites=true&w=majority', { useUnifiedTopology: true , useNewUrlParser: true})
  .then(result => {
        console.log('Connected!')
        app.listen(8080);
  })
  .catch(err => {
    console.log(err);
  });

// Initialize middleware
app.use(express.json());

// Define routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/users", require("./routes/api/users"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
