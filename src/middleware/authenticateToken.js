import jwt from 'jsonwebtoken';
import config from '../config';

const { secretKey } = config;

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado.' });
  }

  jwt.verify(token, secretKey, (err, user) => {
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
