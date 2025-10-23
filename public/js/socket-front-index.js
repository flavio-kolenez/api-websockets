import { insertLinkDocument } from "./index.js";

const socket = io();

socket.emit("get_documents", (document) => {
    document.forEach(documents => {
        insertLinkDocument(documents.name)
    });
});