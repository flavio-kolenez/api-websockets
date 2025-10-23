import "./socket-front-index.js";

const documentList = document.getElementById("lista-documentos");

function insertLinkDocument(documentName) {
    documentList.innerHTML += `  
        <a href="documento.html?nome=${documentName}" class="list-group-item list-group-item-action">
            ${documentName}
        </a>
    `;
};

export { insertLinkDocument };