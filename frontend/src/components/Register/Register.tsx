import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import CreateAccountForm from "../CreateAccountForm/CreateAccountForm";
import Logo from "../Logo/Logo";

const Register = () => {
    return (
        <div className='flex flex-col w-[380px] h-full items-center bg-white rounded-lg'>
            <div className='mt-10'>
                
            </div>
            <div className='mt-[12px]'>
                <Logo width="w-[140px]" height="h-[25px]"/>
            </div>
            <div className='mt-8'>
                <Paragraph 
                    content='Registrarse'
                    color='text-[var(--grayscale-black)]'
                    size='xxl'
                    fontWeight='font-[700]'
                />
            </div>
            <div className='mt-3 text-center px-5'>
                <Paragraph
                    content="Llena el siguiente formulario para registrarte"
                    color='text-[var(--grayscale-gray)]'
                    size='sm'
                    fontWeight='font-[400]'
                />
            </div>
            <div className='mt-[48px]'>
                <CreateAccountForm />
            </div>
        </div>
    );
};

export default Register;