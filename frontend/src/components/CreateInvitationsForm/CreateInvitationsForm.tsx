import React, { useState } from "react";
import Input from "../Input/Input";
import ButtonLogIn from "../ButtonLogIn/ButtonLogIn";
import { createInvitation } from "../../../api/auth";
import Paragraph from "../Paragraph/Paragraph";
import useFormValidation from "../../hooks/useFormValidation";
import QRModal from "../QRModal/QRModal";
import { useDispatch } from 'react-redux';
import { addInvitation } from "../../../redux/userSlice";

const CreateInvitationsForm = () => {

    const { values, errors, handleChange, validateCreateInvitationForm, } = useFormValidation();

    const TOKEN = localStorage.getItem('token');

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [qrData, setQrData] = useState("");
    const [invitedName, setInvitedName] = useState("");
    const [entryDate, setEntryDate] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [id, setId] = useState("");
    const dispatch = useDispatch();

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if ((TOKEN !== null) && (validateCreateInvitationForm())) {
            try {
                const res = await createInvitation(TOKEN ,values);
                setQrData(`${res?.data?.invitedName}, ${res?.data?.entryDate}, ${res?.data?.expirationDate}`);
                setInvitedName(res?.data?.invitedName);
                setEntryDate(res?.data?.entryDate);
                setExpirationDate(res?.data?.expirationDate);
                setId(res?.data?._id);
                dispatch(addInvitation(res?.data));
                openModal();
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("Lo sentimos, ha ocurrido un error al obtener el token")
        }
    };

    return (
        <form onSubmit={handleSubmit} className= "flex flex-col justify-center items-center">
            <div className="mb-10 text-center">
                <Paragraph 
                    content='Crea una invitación a tu departamento para tus amigos'
                    size='lg'
                    fontWeight='font-[700]'
                />
            </div>

            <Input
                type="text"
                label="Nombre del invitado"
                placeholder="Nombre del invitado"
                value={values.invitedName}
                onChange={handleChange('invitedName')}
            />

            <Input
                type="date"
                label="Fecha de invitación"
                placeholder="Fecha de invitación"
                value={values.entryDate.toString().split('T')[0]}
                onChange={handleChange('entryDate')}
            />

            <Input
                type="date"
                label="Fecha de expiración"
                placeholder="Fecha de expiración"
                value={values.expirationDate.toString().split('T')[0]}
                onChange={handleChange('expirationDate')}
            />
            {errors.invitedName && <p className="text-[14px] text-red-500 mb-2">{errors.invitedName}</p>}
            {errors.entryDate && <p className="text-[14px] text-red-500 mb-2">{errors.entryDate}</p>}
            {errors.expirationDate && <p className="text-[14px] text-red-500 mb-2">{errors.expirationDate}</p>}

            <ButtonLogIn 
                content="Crear invitación"
            />
            <QRModal 
                isOpen={modalIsOpen}
                onClose={closeModal}
                qrData={qrData}
                invitedName={`Esta invitación es para: ${invitedName}`}
                entryDate={`La invitación se realizó el día: ${entryDate}`}
                expirationDate={`Esta invitación caduca el día: ${expirationDate}`}
                id={id}
                onDeleteInvitation={() => {}}
            />
        </form>
    );
};

export default CreateInvitationsForm;