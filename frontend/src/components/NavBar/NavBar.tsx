import React from 'react';
import Logo from '../Logo/Logo';
import Link from 'next/link';
import GenericButton from '../GenericButton/GenericButton';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/userSlice';
import { useRouter } from 'next/router';

const NavBar = () => {

    const dispatch = useDispatch();
    const router  = useRouter();
    const logoutSession = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        router.push('/');
    };

    return (
        <div className='flex justify-between'>
            <div className='mt-5 ml-5'>
                <Link href={'/profile'}>
                    <Logo width="w-[140px]" height="h-[25px]" />
                </Link>
            </div>

            <div className='mt-4 mr-5'>
                <GenericButton
                    content='Cerrar sesión'
                    backgroundColor='bg-[white]'
                    textColor='text-black'
                    width="w-[150px]"
                    height="h-[40px]"
                    hover="hover:text-[var(--hover-link)] transition duration-300 ease-in-out"
                    border="border 2 border-[black]"
                    onClick={logoutSession}
                />
            </div>
        </div>
    );
};

export default NavBar;