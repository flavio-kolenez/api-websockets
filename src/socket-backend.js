import { findDocument, getDocuments, updateDocument } from "./documentsDb.js";
import io from "./server.js";

io.on("connection", (socket) => {
    socket.on("get_documents", async (returnDocuments) => {
        const documents = await getDocuments();
        returnDocuments(documents);
    });

    socket.on("select_document", async (documentName, returnText) => {
        socket.join(documentName);
        const document = await findDocument(documentName);

        if(document) {
            // socket.emit("document_text", document.text);
            returnText(document.text);
        };
    });
    
    socket.on("text_edited", async ({ text, documentName }) => {
        // socket.broadcast.emit("text_editor_clients", texto);
        const updateText = await updateDocument(text, documentName);

        if(updateText.modifiedCount) {
            socket.to(documentName).emit("text_editor_clients", text);
        };
    });
});

