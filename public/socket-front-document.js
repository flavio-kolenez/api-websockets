import { updateEditorText } from "./index.js";

const socket = io(); 

function emitEditorText(text) {
    socket.emit("text_edited", text);
}

socket.on("text_editor_clients", (texto) => {
    updateEditorText(texto);
});

export { emitEditorText };