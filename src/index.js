require('./db/mongoose');
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRouter = require('./routers/product');

const app = express();

app.use(express.json());
app.use(cors());
app.use(productRouter);

app.listen(3000);