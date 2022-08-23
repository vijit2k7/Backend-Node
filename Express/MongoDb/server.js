const express = require("express");
const mongoose = require("mongoose");
const router = require('./routes');
const app = express();

app.use(express.json());

mongoose.connect(`mongodb+srv://dbUser1:dbUser1@cluster0.ouyxt74.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(router);
app.listen(3000, () => {
  console.log("Server is running at port 3000");
});