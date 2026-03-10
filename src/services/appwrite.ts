import { Client, Account, Databases, Storage } from "appwrite";

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // tu endpoint
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // tu projectId

// Exporta instancias de los servicios que usarás
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export default client;
