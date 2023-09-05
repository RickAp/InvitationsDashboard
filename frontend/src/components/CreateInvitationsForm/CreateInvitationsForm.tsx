import React from "react";
import Input from "../Input/Input";
import ButtonLogIn from "../ButtonLogIn/ButtonLogIn";
import { createInvitation, invitationsRequest } from "../../../api/auth";
import Paragraph from "../Paragraph/Paragraph";
import useFormValidation from "@/hooks/useFormValidation";

const CreateInvitationsForm = () => {

    const { values, errors, handleChange, validateCreateInvitationForm, } = useFormValidation();

    const TOKEN = localStorage.getItem('token');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if ((TOKEN !== null) && (validateCreateInvitationForm())) {
            try {
                const res = await createInvitation(TOKEN ,values);
                console.log(res);
                const invitationRes = await invitationsRequest(TOKEN);
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("Lo sentimos, ha ocurrido un error")
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
        </form>
    );
};

export default CreateInvitationsForm;