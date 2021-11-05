const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    Title: String,
    details : String,
    dateCreated: {
        type: Date,
        default: Date.now
    }
  });
  

  const Data = mongoose.model("Data", DataSchema);

  module.exports = Data