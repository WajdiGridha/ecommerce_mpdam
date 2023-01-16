const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");

connectDB();
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json(), urlencodedParser);

app.use(express.json());
app.get("/", (req, res) =>
{
  res.send("Hello Mpdam");
});
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/", require("./routes/produitRoutes"));
app.listen(port, () => console.log(`Server Stated on ${port}`));

