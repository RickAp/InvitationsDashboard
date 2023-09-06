import React, { useState } from 'react';
import Paragraph from '../Paragraph/Paragraph';
import GenericButton from '../GenericButton/GenericButton';
import Line from '../Line/Line';
import QRModal from '../QRModal/QRModal';

type CardProps = {
    invitedName: string;
    entryDate: string;
    expirationDate: string;
    qrData: string
    id: string;
    onDeleteInvitation: (id: string) => void;
};

const Card = ({ invitedName, entryDate, expirationDate, qrData, id, onDeleteInvitation }: CardProps) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return(
        <div className='flex flex-col w-full h-full border 2 border-[var(--card-border)] rounded-lg px-10 py-[50px] hover:border-[var(--hover-link)] transition duration-300 ease-in-out break-words'>
            <Paragraph
                content={invitedName}
                color='text-white'
                size='xl'
                fontWeight='font-[700]'
                textAlign='left'
            />
    
            <Line
                width='h-[15px]'
                height='w-[300px]'
            />

            <div className='mt-5'>
                <GenericButton
                    content="Ver detalle"
                    backgroundColor="bg-[var(--button-bg)] hover:bg-[var(--button-hover-bg)] transition duration-300 ease-in-out"
                    textColor="text-white"
                    width="w-[120px]"
                    height="h-[40px]"
                    onClick={openModal}     
                />
            </div>
            
            <QRModal
                isOpen={modalIsOpen}
                onClose={closeModal}
                qrData={qrData}
                invitedName={`${invitedName}`}
                entryDate={`La invitación se realizó el día: ${entryDate}`}
                expirationDate={`Esta invitación caduca el día: ${expirationDate}`}
                id={id}
                onDeleteInvitation={onDeleteInvitation}
            />
        </div>
    );
};

export default Card;