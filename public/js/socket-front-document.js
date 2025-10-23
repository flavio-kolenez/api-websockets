import { updateEditorText } from "./document.js";

const socket = io(); 

function selectDocument(name) {
    socket.emit("select_document", name, (text) => {
        updateEditorText(text)
    });
}

function emitEditorText(data) {
    socket.emit("text_edited", data);
}

socket.on("text_editor_clients", (texto) => {
    updateEditorText(texto);
});

export { emitEditorText, selectDocument };