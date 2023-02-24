require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT || 3000;

mongoose.set("debug", true);
mongoose.set("strictQuery", false);
mongoose.connect(DATABASE_URL);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();

app.use(express.json());
app.use("/api", routes);

app.listen(3000, (req, res) => {
  console.log(`Server started at ${PORT}`);
});
