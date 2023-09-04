import axios from "axios";

interface User {
    username: string;
    lastName: string;
    email: string;
    password: string;
    departmentNumber: number; 
}

const API = "http://localhost:4000/api";

export const registerRequest = (user: User) => axios.post(`${API}/register`, user);
export const loginRequest = (user: User) => axios.post(`${API}/login`, user);