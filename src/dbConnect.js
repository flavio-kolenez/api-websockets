import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);
let documentsCollection;

try {
    await client.connect();

    const db = client.db(process.env.MONGO_DB);
    documentsCollection = db.collection("documents");

    console.log("\n✅ Successfully connected to the database!");
} catch (error) {
    console.log(error);
    console.log("\n❌ Unsuccessful connected to the database!");
}

export { documentsCollection };