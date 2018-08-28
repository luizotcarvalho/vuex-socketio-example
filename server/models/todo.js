const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const TodoSchema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    done: {
      type: Boolean
    }
  },
  {
    collection: "todos"
  }
);

module.exports = mongoose.model("Todo", TodoSchema);
