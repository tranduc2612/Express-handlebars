const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/Demo", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect Success !");
  } catch (e) {
    console.log("Connect failed !");
  }
}

module.exports = { connect };
