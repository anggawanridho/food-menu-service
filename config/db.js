const mongoose = require("mongoose");

const connectToMongoDB = async () => {
  try {
    await mongoose
      .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connection to DB success!");
      });
  } catch (err) {
    console.error("Error while connecting the DB", err.message);
  }
};

module.exports = connectToMongoDB;
