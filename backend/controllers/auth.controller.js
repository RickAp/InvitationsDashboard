import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
    const { username, lastName, email, password, departmentNumber } = req.body;

    try {
        const userFound = await User.findOne({email});
        if (userFound) return res.status(400).json({ message: ["Este correo ya está asociado a una cuenta"]});

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User ({
            username,
            lastName,
            email,
            password: hashPassword,
            departmentNumber
        })
        const newUserSaved = await newUser.save();
        const token = await createAccessToken({ id: newUserSaved._id });
        
        res.cookie('token', token);
        res.json(newUserSaved);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userFound = await User.findOne({ email });
        if (!userFound) return res.status(400).json({ message: "Usuario no encontrado" });
        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) return res.status(400).json({ message: "Contraseña incorrecta" });
        
        const token = await createAccessToken({ id: userFound._id });
        
        res.cookie('token', token);
        res.json(userFound);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const logout = async (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    })
    return res.sendStatus(200);
};

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id);

    if (!userFound) return res.status(404).json({ message: "User not found" });

    return res.json(userFound);
};