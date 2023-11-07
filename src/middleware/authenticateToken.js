import jwt from 'jsonwebtoken';
import config from '../config';

const { secretKey } = config;
console.log(secretKey);
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado.' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    console.log("token", token);
    console.log("secretkey", secretKey);
    console.log("user", user);

    if (err) {
      return res.status(403).json({ message: 'Token no válido.' });
    }

    req.user = user;
    console.log("requser", req.user);
    console.log("user", user);
    next();
  });
};

export { authenticateToken };
