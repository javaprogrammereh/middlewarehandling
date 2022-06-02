const path = require("path");

const dotenv = require("dotenv");
const express = require("express");
const connectDB= require('./config/db');
const notFound = require('./middlewares/not_found');
const errorHandlerMiddleware = require('./middlewares/error_handler');
dotenv.config({ path: "./config/config.env" });
connectDB();
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


app.use(require('./routers/taskRouter'));
app.use(notFound);
app.use(errorHandlerMiddleware);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
