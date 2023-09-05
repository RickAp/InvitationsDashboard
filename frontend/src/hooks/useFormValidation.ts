import { useState } from 'react';

interface FormState {
    email: string;
    password: string;
    username: string;
    lastName: string;
    departmentNumber: number;
    invitedName: string;
    entryDate: string;
    expirationDate: string;
}

interface ValidationErrors {
    email?: string;
    password?: string;
    username?: string;
    lastName?: string;
    departmentNumber?: number;
    invitedName?: string;
    entryDate?: string;
    expirationDate?: string;
}

const useFormValidation = () => {
    const [values, setValues] = useState<FormState>({ 
        email: '', 
        password: '', 
        username: '', 
        lastName: '', 
        departmentNumber: 0,
        invitedName: '',
        entryDate: '',
        expirationDate: '', 
    });
    const [errors, setErrors] = useState<ValidationErrors>({});

    const isValidEmail = (email: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

    const handleChange = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValues((prev) => ({ ...prev, [field]: newValue }));

        switch (field) {
            case 'username':
                if (!newValue) {
                    setErrors((prev) => ({ ...prev, username: 'El campo "Nombre" no puede estar vacío' }));
                }
                 else {
                    setErrors((prev) => ({ ...prev, username: undefined }));
                }
                break;
            case 'lastName':
                if (!newValue) {
                    setErrors((prev) => ({ ...prev, lastName: 'El campo "Apellidos" no puede estar vacío' }));
                } else {
                    setErrors((prev) => ({ ...prev, lastName: undefined }));
                }
                break;
            case 'email':
                if (!isValidEmail(newValue)) {
                    setErrors((prev) => ({ ...prev, email: 'Correo electrónico inválido' }));
                } else {
                    setErrors((prev) => ({ ...prev, email: undefined }));
                }
                break;
            case 'password':
                if (newValue.length > 40) {
                    setErrors((prev) => ({ ...prev, password: 'La contraseña no debe exceder los 40 caracteres' }));
                } else {
                    setErrors((prev) => ({ ...prev, password: undefined }));
                }
                break;
            case 'invitedName':
                if (!newValue) {
                    setErrors((prev) => ({ ...prev, lastName: 'El campo "Invitado" no puede estar vacío' }));
                } else {
                    setErrors((prev) => ({ ...prev, invitedName: undefined }));
                }
            case 'entryDate':
                if (!newValue) {
                    setErrors((prev) => ({ ...prev, entryDate: 'El campo "Fecha de invitación" no puede estar vacío' }));
                } else {
                    setErrors((prev) => ({ ...prev, entryDate: undefined }));
                }
            case 'expirationDate':
                if (!newValue) {
                    setErrors((prev) => ({ ...prev, expirationDate: 'El campo "Fecha de expiración" no puede estar vacío' }));
                } else {
                    setErrors((prev) => ({ ...prev, expirationDate: undefined }));
                }      
        }
    };

    const handleDepartmentNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = parseInt(e.target.value, 10);
        if (!isNaN(newVal)) {
            setValues({...values, departmentNumber: newVal});
        }
    };

    const validateRegisterForm = (): boolean => {
        if (!values.username) {
            setErrors((prev) => ({ ...prev, username: 'El campo "Nombre" no puede estar vacío' }));
            return false;
        }
        if (!values.lastName) {
            setErrors((prev) => ({ ...prev, lastName: 'El campo "Apellidos" no puede estar vacío' }));
            return false;
        }
        if (!values.email || !isValidEmail(values.email)) {
            setErrors((prev) => ({ ...prev, email: 'Correo electrónico inválido' }));
            return false;
        }
        if (values.password.length < 8 || (!values.password) || (values.password.length > 40))  {
            setErrors((prev) => ({ ...prev, password: 'La contraseña debe tener entre 8 y 40 caracteres' }));
            return false;
        }
        return true;
    };

    const validateLoginForm = (): boolean => {
        if (!values.email || !isValidEmail(values.email)) {
            setErrors((prev) => ({ ...prev, email: 'Correo electrónico inválido' }));
            return false;
        }
        if (values.password.length < 8 || (!values.password) || (values.password.length > 40))  {
            setErrors((prev) => ({ ...prev, password: 'La contraseña debe tener entre 8 y 40 caracteres' }));
            return false;
        }
        return true;
    };

    const validateCreateInvitationForm = (): boolean => {
        if (!values.invitedName) {
            setErrors((prev) => ({ ...prev, invitedName: 'El campo "Invitado" no puede estar vacío' }));
            return false;
        }
        if (!values.entryDate) {
            setErrors((prev) => ({ ...prev, invitedName: 'El campo "Fecha de invitación" no puede estar vacío' }));
            return false;
        }
        if (!values.expirationDate) {
            setErrors((prev) => ({ ...prev, invitedName: 'El campo "Fecha de expiración" no puede estar vacío' }));
            return false;
        }
        return true;
    };

    return {
        values,
        errors,
        handleChange,
        validateRegisterForm,
        handleDepartmentNumber,
        validateLoginForm,
        validateCreateInvitationForm,
    };
};

export default useFormValidation;