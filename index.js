const express = require("express");
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());

const {Sequelize } = require("sequelize");

const sequelize = new Sequelize()



app.listen(PORT, () => {
   console.log(`server is running on port ${PORT}`);
});
