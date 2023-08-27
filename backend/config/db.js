const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://ankurk8k9:RfTFDWgSBbdoGqmH@cluster0.pcdvor3.mongodb.net/chatapp?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });

    console.log(`MongoDB Connected`.yellow.bold);
  } catch (error) {
    console.log(`Error:`);
    process.exit();
  }
};  

module.exports = connectDB;

