import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Conexão de cliente feita! ID: ", socket.id);

    socket.on("text_edited", (texto) => {
        socket.broadcast.emit("text_editor_clients", texto);
    });
});