const io = require("socket.io")(3001, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("custom-event", (number, string, obj) => {
    console.log(number, string, obj);
  });
});
