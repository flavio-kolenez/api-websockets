import { emitEditorText } from "./socket-front-document.js";

const textId = document.getElementById("editor-texto");

textId.addEventListener("keyup", () => {
    emitEditorText(textId.value);
});

function updateEditorText(texto) {
    textId.value = texto
}

export { updateEditorText };