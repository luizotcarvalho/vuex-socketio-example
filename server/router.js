const TodoController = require("./controllers/todo"),
  express = require("express");

module.exports = function(app) {
  // Initializing route groups
  const apiRoutes = express.Router(),
    todoRoutes = express.Router();

  //= ========================
  // Todo Routes
  //= ========================

  apiRoutes.use("/todos", todoRoutes);

  todoRoutes.get("/", TodoController.find);
  todoRoutes.post("/", TodoController.add);
  todoRoutes.patch("/:id", TodoController.update);
  todoRoutes.delete("/", TodoController.remove);

  // Set url for API group routes
  app.use("/api", apiRoutes);
};
