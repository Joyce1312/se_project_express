const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./routes/index");
const { createUser, login } = require("./controllers/users");
const verifyToken = require("./middlewares/auth");

const app = express();
const { PORT = 3001 } = process.env;

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {})
  .catch(console.error);

app.use(express.json());

app.post("/signin", login);
app.post("/signup", createUser);

// app.use((req, res, next) => {
//   req.user = {
//     _id: "691ca576600a5e8324ca9793",
//   };
//   next();
// });

app.use("/", verifyToken, mainRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
