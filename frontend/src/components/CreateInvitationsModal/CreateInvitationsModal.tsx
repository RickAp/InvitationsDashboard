import React from 'react';
import Modal from 'react-modal'
import CreateInvitationsForm from '../CreateInvitationsForm/CreateInvitationsForm';

type CustomModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const CreateInvitationsModal = ({ isOpen, onClose }: CustomModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className='fixed inset-0 flex bg-[white] mr-[400px] ml-[400px] mt-[100px] mb-[100px] items-center justify-center rounded-lg'
            overlayClassName="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black"
        >
            <div>
                <button
                    onClick={onClose}
                    className="absolute top-1 right-1 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    <img src="equis.png" alt="icono equis" className='h-[20px] w-[20px]' />
                </button>
                <CreateInvitationsForm />
            </div>
        </Modal>
    );
};

export default CreateInvitationsModal;