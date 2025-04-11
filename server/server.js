const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
const connectDB = require("./config/db");

const app = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const PORT = process.env.PORT || 8080;
app.get("/", (req, res) => {
  res.send("Con me may");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
