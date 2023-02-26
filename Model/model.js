const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  question: {
    type: String,
    default: null,
  },
  options: [
    {
      option1: {
        type: String,
        default: null,
      },
      option2: {
        type: String,
        default: null,
      },
      option3: {
        type: String,
        default: null,
      },
      option4: {
        type: String,
        default: null,
      },
    },
  ],
  answer:{
    type:String,
    default:null
  }
});

const quizModel = new mongoose.model("Quiz", quizSchema);

module.exports = quizModel;
