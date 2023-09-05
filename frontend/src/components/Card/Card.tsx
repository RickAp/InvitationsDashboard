import React from 'react';
import Paragraph from '../Paragraph/Paragraph';
import GenericButton from '../GenericButton/GenericButton';
import Line from '../Line/Line';
import  QRCode from "qrcode.react";

type CardProps = {
    invitedName: string;
};

const Card = ({ invitedName }: CardProps) => {
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
                />
            </div>
            
        </div>
    );
};

export default Card;