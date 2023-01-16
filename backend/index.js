const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5001;
const connectDB = require("./config/db");
// const cors = require("cors");
// var corsOptions = {
//   origin: "http://localhost:5000"
// };

connectDB();
const app = express();
// app.use(cors(corsOptions));

const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json(), urlencodedParser);

app.use(express.json());
app.get("/", (req, res) =>
{
  res.send("Hello Mpdam");
});
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/produit", require("./routes/produitRoutes"));
app.listen(port, () => console.log(`Server Stated on ${port}`));

