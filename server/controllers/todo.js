const Todo = require("../models/todo");

exports.find = function(req, res, next) {
  Todo.find(function(err, todos) {
    if (err) {
      return next(new Error(err));
    }

    res.json(todos);
  });
};

exports.add = function(req, res) {
  Todo.create(
    {
      text: req.body.text,
      done: false
    },
    function(err, todo) {
      if (err) {
        res.status(400).send("Unable to create todo list");
      }

      res.status(200).json(todo);
    }
  );
};

exports.remove = function(req, res, next) {
  var id = req.params.id;

  Todo.findByIdAndRemove(id, function(err, todo) {
    if (err) {
      return next(new Error("Todo not found"));
    }

    res.status(200).json("Syccessfully removed");
  });
};

exports.update = function(req, res, next) {
  var id = req.params.id;

  Todo.findById(id, function(err, todo) {
    if (err) {
      return next(new Error("Todo not found"));
    } else {
      todo.text = req.body.text;
      todo.done = req.body.done;

      Todo.save({
        function(error, todo) {
          if (error) {
            res.status(400).send("Unable to upadte todo");
          } else {
            res.status(200).json(todo);
          }
        }
      });
    }
  });
};
