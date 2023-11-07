import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userService } from "../services/userService";
import config from '../config';

const { secretKey } = config;

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, secretKey, {
    expiresIn: "1h",
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Por favor, proporciona un correo y una contraseña válidos." });
  }

  try {
    const user = await userService.getUserByEmail(email);
    console.log(user);
    if (!user) {
      return res.status(401).json({ message: "Credenciales incorrectas." });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    
    if (!passwordMatch) {
      return res.status(401).json({ message: "Credenciales incorrectas." });
    }

    const token = generateToken(user);
    console.log("token generado",token);
    res.json({ token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const authController = {
  login,
};
