import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import Logo from "../Logo/Logo";
import ChangePasswordForm from "../ChangePassword/ChangePasswordForm";

const ChangePasswordComponent = () => {
    return (
        <div className='flex flex-col w-[380px] h-full items-center bg-white rounded-lg'>
            <div className='mt-10'>
                
            </div>
            <div className='mt-[12px]'>
                <Logo width="w-[140px]" height="h-[25px]"/>
            </div>
            <div className='mt-8'>
                <Paragraph 
                    content='Cambiar contraseña'
                    size='xxl'
                    fontWeight='font-[700]'
                />
            </div>
            <div className='mt-3 text-center px-5'>
                <Paragraph
                    content="Introduce tu correo electrónico y tu actual contraseña para cambiarla"
                    size='sm'
                    fontWeight='font-[400]'
                />
            </div>
            <div className='mt-[48px] mb-11'>
                <ChangePasswordForm />
            </div>
        </div>
    );
};

export default ChangePasswordComponent;