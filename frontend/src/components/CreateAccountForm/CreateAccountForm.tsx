import React from 'react';
import Input from '../Input/Input';
import ButtonLogIn from '../ButtonLogIn/ButtonLogIn';
import useFormValidation from '../../hooks/useFormValidation';
import { useRouter } from 'next/router';
import { registerRequest } from '../../../api/auth';

const CreateAccountForm = () => {

    const { values, errors, handleChange, validateForm, handleDepartmentNumber } = useFormValidation();
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (validateForm()) {
            const res = await registerRequest(values);
            router.push('/profile');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                label="Nombre"
                placeholder="Nombre"
                value={values.username}
                onChange={handleChange('username')}
            />

            <Input
                type="text"
                label="Apellidos"
                placeholder="Apellidos"
                value={values.lastName}
                onChange={handleChange('lastName')}
            />

            <Input
                type="text"
                label="Correo electrónico"
                placeholder="Correo electrónico"
                value={values.email}
                onChange={handleChange('email')}
            />

            <Input
                type="password"
                label="Contraseña"
                placeholder="Contraseña"
                value={values.password}
                onChange={handleChange('password')}
            />

            <Input
                type="number"
                label="Departamento"
                placeholder="Número de departamento"
                value={values.departmentNumber}
                onChange={handleDepartmentNumber}
            />
            {errors.username && <p className="text-[14px] text-red-500 mb-2">{errors.username}</p>}
            {errors.lastName && <p className="text-[14px] text-red-500 mb-2">{errors.lastName}</p>}
            {errors.email && <p className="text-[14px] text-red-500 mb-2">{errors.email}</p>}
            {errors.password && <p className="text-[14px] text-red-500 mb-2">{errors.password}</p>}

            <div className='mb-11'>
                <ButtonLogIn 
                    content="Registrarse"
                />
            </div>
            
        </form>
    );
};

export default CreateAccountForm;