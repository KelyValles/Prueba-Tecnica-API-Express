import { getConnection } from "../database/database";

const getAllUsers = async () => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, lastname, email, password FROM users");
        return result; 

    } catch (error) {
        throw error;
    }
};

const createUser = async (user) => {
    try {
        const connection = await getConnection();
        await connection.query("INSERT INTO users SET ?", user);
    
    } catch (error) {
        throw error;
    }
};

const getUserById = async (id) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, lastname, email, password FROM users WHERE id = ?", id);
        return result[0]; 

    } catch (error) {
       throw error;
    }
};
    
const deleteUser = async (id) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM users WHERE id = ?", id);
        return result;

    } catch (error) {
        throw error;
    }
};

const updateUser = async (id, user) => {
    try {
        const connection = await getConnection();
        await connection.query("UPDATE users SET ? WHERE id = ?", [user, id]);
        
    } catch (error) {
        throw error;
    }  
};

const getUserByEmail = async (email) => {
    try {
      const connection = await getConnection();
      const result = await connection.query("SELECT id, name, lastname, email, password FROM users WHERE email = ?", email);
      return result[0];
    } catch (error) {
      throw error;
    }
  };

export const userService = {
    getAllUsers,
    createUser,
    getUserById,
    deleteUser,
    updateUser,
    getUserByEmail
};