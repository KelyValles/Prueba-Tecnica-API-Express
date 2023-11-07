import { config } from "dotenv";
import crypto from "crypto";

config();

if (!process.env.SECRET_KEY) {
    // Genera una clave aleatoria de 256 bits (32 bytes) si no se ha configurado
    process.env.SECRET_KEY = crypto.randomBytes(32).toString('hex');
  }

export default{
    host: process.env.HOST  || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || "",
    secretKey: process.env.SECRET_KEY, 
};
