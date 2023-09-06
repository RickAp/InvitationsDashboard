import React from 'react';
import Modal from 'react-modal'
import QRCode from 'qrcode.react'
import Paragraph from '../Paragraph/Paragraph';
import GenericButton from '../GenericButton/GenericButton';
import { deleteInvitation } from '../../../api/auth';

type CustomModalProps = {
    isOpen: boolean;
    onClose: () => void;
    qrData: string;
    invitedName: string;
    entryDate: string;
    expirationDate: string;
    id: string;
    onDeleteInvitation: (id: string) => void;
};

const QRModal = ({ isOpen, onClose, qrData, invitedName, entryDate, expirationDate, id, onDeleteInvitation }: CustomModalProps) => {

    const TOKEN = localStorage.getItem('token');
    const deleteInvitationFunction = async () => {
        if (TOKEN !== null) {
            try {
                const res = await deleteInvitation(TOKEN, id);
                onDeleteInvitation(id);
                onClose();
            } catch (error) {
                onClose();
                console.log(error);
            } 
        } else {
            console.log("Lo sentimos, ha ocurrido un error al obtener el token")
        } 
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className='fixed inset-0 flex bg-[white] desktop:mr-[400px] mobile:mr-[25px] desktop:ml-[400px] mobile:ml-[25px] desktop:mt-[100px] mobile:mt-[50px] desktop:mb-[100px] mobile:mb-[50px] items-center justify-center rounded-lg'
            overlayClassName="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black"
        >
            <div>
                <button
                    onClick={onClose}
                    className="absolute top-1 right-1 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    <img src="equis.png" alt="icono equis" className='h-[20px] w-[20px]' />
                </button>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='mb-5'>
                    <Paragraph 
                        content='Comparte con tus amigos tu invitación!'
                        color='text-black'
                        size='lg'
                        fontWeight='font-[700]'
                        textAlign='center'
                    />
                </div>
                
                <div>
                    <QRCode value={qrData} />
                </div>
                
                <div className='mt-5'>
                    <Paragraph 
                        content={invitedName}
                        color='text-black'
                        size='md'
                        fontWeight='font-[400]'
                        textAlign='center'
                    />
                </div>

                <div className='mt-5'>
                    <Paragraph 
                        content={entryDate}
                        color='text-black'
                        size='md'
                        fontWeight='font-[400]'
                        textAlign='center'
                    />
                </div>

                <div className='mt-5'>
                    <Paragraph 
                        content={expirationDate}
                        color='text-black'
                        size='md'
                        fontWeight='font-[400]'
                        textAlign='center'
                    />
                </div>

                <div className='mt-5'>
                    <div className='flex space-x-5'>
                        <div>
                            <GenericButton 
                                content='Salir'
                                backgroundColor='bg-[var(--exit-bg)] hover:bg-[var(--hover-exit)] transition duration-300 ease-in-out'
                                textColor='text-white'
                                height='h-[50px]'
                                width='w-[150px]'
                                onClick={onClose}
                            />
                        </div>

                        <div>
                            <GenericButton 
                                content='Eliminar invitación'
                                backgroundColor='bg-[var(--delete-bg)] hover:bg-[var(--hover-delete)] transition duration-300 ease-in-out'
                                textColor='text-white'
                                height='h-[50px]'
                                width='w-[150px]'
                                onClick={deleteInvitationFunction}
                            />
                        </div>
                    </div>
                    
                </div>
            </div>
        </Modal>
    );
};

export default QRModal;