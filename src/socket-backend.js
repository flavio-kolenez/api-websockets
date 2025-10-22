import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Conexão de cliente feita! ID: ", socket.id);

    socket.on("text_edited", (text) => {
        console.log(text);
    });
});