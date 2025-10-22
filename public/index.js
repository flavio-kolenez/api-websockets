const socket = io(); 
const textId = document.getElementById("editor-texto");

textId.addEventListener("keyup", () => {
    socket.emit("text_edited", textId.value);
});
