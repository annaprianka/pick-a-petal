const mongoose = require ("mongoose")
const { stringify } = require("postcss")

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
      },
      desc: {
        type: String,
        required: true,
      },
      photo: {
        type: String,
        required: false,
      },
      username: {
        type: String,
        required: true,
      },
      categories: {
        type: Array,
        required: false,
      },
    },
    {timestamp: true}
);

module.exports = mongoose.model ("Post", PostSchema);

