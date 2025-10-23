import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";
import "./dbConnect.js";

const app = express();
const PORT = process.env.port || 3000;

// Pega o caminho atual dai
// vai pra raiz do projeto em uma pasta chamada public e salva isso na const
// dps ele usa isso (os arquivos na pasta public) no express
const actualPath = url.fileURLToPath(import.meta.url);
const publicDirectory = path.join(actualPath, "../../public");
app.use(express.static(publicDirectory));

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
console.log(`\nServer listening at: \nhttp://localhost:${PORT} \n`);
}); 

const io = new Server(httpServer);

export default io;