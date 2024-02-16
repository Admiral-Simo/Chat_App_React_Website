const io = require("socket.io")(4999, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`Socket connected: ${socket.id}`);

  socket.on("send_message", (data) => {
    console.log("Message received:", data);
    const messageWithDate = {
      ...data,
      date: new Date(Date.now())
    };
    socket.broadcast.emit("receive_message", messageWithDate);
  });

  socket.on("disconnect", () => {
    console.log(`Socket disconnected: ${socket.id}`);
  });
});
