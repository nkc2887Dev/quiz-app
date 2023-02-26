const quizModel = require("../Model/model");

exports.createQuiz = async (req, res) => {
  try {
    const quiz = new quizModel(req.body);
    await quiz.save();
    res.status(201).json({
      status: "success",
      data: quiz,
    });
  } catch (error) {
    res.status(401).json({
      status: "failure",
      error,
    });
  }
};

exports.allQuiz = async (req, res) => {
  try {
    const user = await quizModel.find();
    res.json({
      status: "success",
      result: user.length,
      data: user,
    });
  } catch (error) {
    res.status(401).json({
      status: "failure",
      error,
    });
  }
};

exports.updateQuiz = async (req, res) => {
  try {
    const id = req.params.id;
    const quiz = await quizModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    await quiz.save();
    res.status(201).json({
      status: "success",
      data: quiz,
    });
  } catch (error) {
    res.status(401).json({
      status: "failure",
      error,
    });
  }
};



