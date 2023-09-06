import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import LoginForm from "../LoginForm/LoginForm";
import Logo from "../Logo/Logo";
import Link from "next/link";

const Login = () => {
    return (
        <div className='flex flex-col w-[380px] h-full items-center bg-white rounded-lg'>
            <div className='mt-10'>
                
            </div>
            <div className='mt-[12px]'>
                <Logo width="w-[140px]" height="h-[25px]"/>
            </div>
            <div className='mt-8'>
                <Paragraph 
                    content='Iniciar sesión'
                    size='xxl'
                    fontWeight='font-[700]'
                />
            </div>
            <div className='mt-3 text-center px-5'>
                <Paragraph
                    content="Comparte invitaciones con código QR a tus amigos"
                    size='sm'
                    fontWeight='font-[400]'
                />
            </div>
            <div className='mt-[48px]'>
                <LoginForm />
            </div>
            <div className='mt-8 mb-8'>
                <div className='flex space-x-1'>
                    <Paragraph 
                        content='¿No tienes cuenta?'
                        size='sm'
                        fontWeight='font-[400]'
                    />
                    <Link href={'/register'}>
                        <Paragraph 
                            content='Registrate aquí'
                            size='sm'
                            fontWeight='font-[600]'
                        />
                    </Link>
                </div>

                <div className="mt-4">
                    <Link href={'/changePassword'}>
                        <Paragraph 
                            content='Cambiar contraseña'
                            size='sm'
                            fontWeight='font-[600]'
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;