import { documentsCollection } from "./dbConnect.js";

function getDocuments() {
    const documents = documentsCollection.find().toArray();

    return documents;
}

function findDocument(documentName) {
    const document = documentsCollection.findOne({ name: documentName });
    return document;
};

function updateDocument(text, documentName) {
    const updateText = documentsCollection.updateOne({ 
        name: documentName
    }, {
        $set: {
            text
        }
    });

    return updateText;
};

export { findDocument, updateDocument, getDocuments };