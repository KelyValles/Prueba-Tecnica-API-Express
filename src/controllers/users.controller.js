import { userService } from "../services/userService";
import bcrypt from "bcrypt";

const getAllUsers = async(req, res)=>{
    try {
        const allUsers = await userService.getAllUsers();
        res.json(allUsers); 
    } catch (error) {
       res.status(500).send(error.message); 
    }
};

const getUserById = async(req, res)=>{
    try {
        const {id} = req.params;
        const UserById = await userService.getUserById(id);
        
        if (!UserById) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.json(UserById); 

    } catch (error) {
       res.status(500).send(error.message); 
    }
    
};

const createUser = async (req, res)=>{
    try {
        const {name, lastname, email, password} = req.body;

        if(name == undefined || lastname == undefined || email == undefined || password == undefined){
            res.status(400).json({message: "Bad Request. Please fill all field."});
        return;
        }

        const userExists = await userService.getUserByEmail(email);
    
        if (userExists) {
        return res.status(400).json({ message: "Usuario existente, por favor inicie sesión." });
        }

        // Genera el hash de la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = {name, lastname, email, password:hashedPassword }; // Almacena el hash en lugar de la contraseña
        await userService.createUser(user);
        res.status(201).json({message: "User created successfully"});

    } catch (error) {
        res.status(500).send(error.message);
    }
};


const deleteUser = async(req, res)=>{
    try {
        const {id} = req.params;
        await userService.deleteUser(id);
        res.json({message: "User deleted successfully"}); 
    } catch (error) {
       res.status(500).send(error.message); 
    }
    
};

const updateUser = async(req, res)=>{
    try {
        const {id} = req.params;
        const {name, lastname, email, password} = req.body;

        if(id == undefined || name == undefined || lastname == undefined || email == undefined || password == undefined){
            res.status(400).json({message: "Bad Request. Please fill all field."});
        }

        const user = {id, name, lastname, email, password};
        await userService.updateUser(id, user);
        res.json({message: "User updated successfully"}); 
    } catch (error) {
       res.status(500).send(error.message); 
    }
    
};

export const methods = {
    getAllUsers,
    createUser,
    getUserById,
    deleteUser,
    updateUser
};