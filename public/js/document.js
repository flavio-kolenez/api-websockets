import { emitEditorText, selectDocument } from "./socket-front-document.js";

const params = new URLSearchParams(window.location.search);
const documentName = params.get("nome"); 

const textId = document.getElementById("editor-texto");
const documentTitle = document.getElementById("titulo-documento");

documentTitle.textContent = documentName || "Documento sem título";

selectDocument(documentName);

textId.addEventListener("keyup", () => {
    emitEditorText(
        { 
            text: textId.value,
            documentName
        }
    );
});

function updateEditorText(texto) {
    textId.value = texto
}

export { updateEditorText };