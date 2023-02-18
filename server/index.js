const io = require("socket.io")(5000, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("send_message", (data) => {
    socket.broadcast.emit("receive_message", data);
  });
  socket.on("receive_message", (data) => {
    console.log(data);
  });
});
