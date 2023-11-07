import {Router} from "express";
import { methods as usersController }  from "../controllers/users.controller";
import { authController } from "../controllers/auth.controller";
import { authenticateToken } from "../middleware/authenticateToken";


const router=Router();

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crea un nuevo usuario
 *     requestBody:
 *       description: Datos del usuario a crear
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               lastname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       400:
 *         description: Solicitud incorrecta
 */
router.post("/", usersController.createUser);

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Iniciar sesión
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso, devuelve un token de autenticación
 *       400:
 *         description: Solicitud incorrecta, falta el correo o la contraseña
 *       401:
 *         description: Credenciales incorrectas
 *       500:
 *         description: Error del servidor
 */
router.post("/login", authController.login);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         description: Token de autenticación
 *         required: true
 *         type: string
 *     security:
 *       - BearerAuth: [] 
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *       401:
 *         description: No autorizado, token no proporcionado o no válido
 *       500:
 *         description: Error del servidor
 */
router.get("/", authenticateToken, usersController.getAllUsers);
    
/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Obtiene un usuario por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *       404:
 *         description: Usuario no encontrado
 */
router.get("/:id", authenticateToken, usersController.getUserById);


/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Actualiza un usuario por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Datos del usuario a actualizar
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               lastname:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *       400:
 *         description: Solicitud incorrecta
 */
router.put("/:id", authenticateToken, usersController.updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Elimina un usuario por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Usuario eliminado exitosamente
*/ 
router.delete("/:id", authenticateToken, usersController.deleteUser);


export default router;