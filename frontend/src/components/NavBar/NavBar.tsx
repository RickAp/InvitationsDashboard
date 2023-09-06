import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import Link from 'next/link';
import GenericButton from '../GenericButton/GenericButton';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/userSlice';
import { useRouter } from 'next/router';
import CreateInvitationsModal from '../CreateInvitationsModal/CreateInvitationsModal';

const NavBar = () => {

    const dispatch = useDispatch();
    const router  = useRouter();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const logoutSession = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        router.push('/');
    };

    return (
        <div className='flex flex-col'>
            <div className='flex justify-between mobile:bg-[var(--dashboard-bg)]'>
                <div className='mt-5 ml-5 mobile:mb-5'>
                    <Link href={'/profile'}>
                        <Logo width="w-[140px]" height="h-[25px]" />
                    </Link>
                </div>

                <div className='flex mobile:hidden'>
                    <div className='mt-4 mr-5'>
                        <GenericButton
                            content='Crear invitación'
                            backgroundColor='bg-[white]'
                            textColor='text-black'
                            width="w-[150px]"
                            height="h-[40px]"
                            hover="hover:text-[var(--hover-create)] transition duration-300 ease-in-out"
                            border="border 2 border-[black]"
                            onClick={openModal}
                        />
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
                <CreateInvitationsModal 
                    isOpen={modalIsOpen}
                    onClose={closeModal}
                />
            </div>

            <div className='flex desktop:hidden justify-center'>
                <div className='mt-4 mr-5'>
                    <GenericButton
                        content='Crear invitación'
                        backgroundColor='bg-[white]'
                        textColor='text-black mobile:text-[var(--hover-create)]'
                        width="desktop:w-[150px] mobile:w-[150px]"
                        height="h-[40px]"
                        hover="hover:text-[var(--hover-create)] transition duration-300 ease-in-out"
                        border="border 2 border-[black]"
                        onClick={openModal}
                    />
                </div>

                <div className='mt-4 desktop:mr-5'>
                    <GenericButton
                        content='Cerrar sesión'
                        backgroundColor='bg-[white]'
                        textColor='text-black mobile:text-[var(--hover-link)]'
                        width="desktop:w-[150px] mobile:w-[150px]"
                        height="h-[40px]"
                        hover="hover:text-[var(--hover-link)] transition duration-300 ease-in-out"
                        border="border 2 border-[black]"
                        onClick={logoutSession}
                    />
                </div>
            </div>
        </div>
    );
};

export default NavBar;