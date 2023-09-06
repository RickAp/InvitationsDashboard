import axios from "axios";

interface User {
    username: string;
    lastName: string;
    email: string;
    password: string;
    departmentNumber: number; 
}

interface Invitation {
    invitedName: string;
    entryDate: string;
    expirationDate: string; 
}

const API = "http://localhost:4000/api";

export const registerRequest = (user: User) => axios.post(`${API}/register`, user);
export const loginRequest = (user: User) => axios.post(`${API}/login`, user);
export const profileRequest = (token: string) => {
    return axios.get(`${API}/profile`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
};
export const createInvitation = (token: string, invitation: Invitation) => {
    return axios.post(`${API}/invitations`, invitation, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}
export const invitationsRequest = (token: string) => {
    return axios.get(`${API}/invitations`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
};

export const deleteInvitation = (token:string, id: string) => {
    axios.delete(`${API}/invitations/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}