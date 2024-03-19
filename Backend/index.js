const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/todoRoute");
require("env").config();
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));
app.use(routes);
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
