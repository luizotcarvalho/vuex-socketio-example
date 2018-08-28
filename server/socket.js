exports = module.exports = function(io) {
  io.on("connection", socket => {
    console.log("a user connected");

    socket.on("add todo", todo => {
      io.sockets.emit("refresh messages", todo);
    });

    socket.on("remove todo", todo => {
      io.sockets.emit("refresh messages", todo);
    });

    socket.on("toggle todo", todo => {
      io.sockets.emit("refresh messages", todo);
    });

    socket.emit("loadTodos", {
      todos: [
        {
          text: "olá"
        }
      ]
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};
