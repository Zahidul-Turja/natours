const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
// ? The config file have to be read before importing the app
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database connected successfully"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}`);
});
