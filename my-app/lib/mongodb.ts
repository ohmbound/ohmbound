import { MongoClient } from "mongodb";

const uri: string = process.env.DATABASE_URL || ""; // MongoDB connection string from .env.local
const options: object = {};

let client: MongoClient; // Explicitly define the type as MongoClient
let clientPromise: Promise<MongoClient>; // Explicitly define the type as a Promise

if (!process.env.DATABASE_URL) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

// Use a global variable to cache the MongoDB client
declare global {
  // Ensure global._mongoClientPromise is typed
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
