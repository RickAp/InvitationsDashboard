import React, { useEffect, useState } from "react";
import { invitationsRequest } from "../../../api/auth";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import GenericButton from "../GenericButton/GenericButton";

interface Invitation {
    invitedName: string;
}

const CARDS_PER_PAGE = 12;

const Dashboard = () => {

    const TOKEN_REDUX = useSelector((state: { user: { token: string } }) => state.user.token);
    const [invitations, setInvitations] = useState<Invitation[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        
        const getInvitations = async () => {
            let token = TOKEN_REDUX;

            if (!token) {
                const storedToken = localStorage.getItem('token');
                if (storedToken) {
                    token = storedToken;
                }
            }

            if (token) {
                try {
                    const res = await invitationsRequest(token);
                    console.log(res?.data);
                    setInvitations(res?.data);
                } catch (error) {
                    console.log(error);
                }
            } else {
                console.log("Ha ocurrido un error al obtener el token");
            }
        };

        getInvitations();
    }, []);

    const paginatedInvitations = invitations.slice(
        (currentPage - 1) * CARDS_PER_PAGE,
        currentPage * CARDS_PER_PAGE
    );

    return (
        <div className="w-11/12 h-4/5 mx-auto my-4 bg-[var(--dashboard-bg)] rounded-lg">
            <div className="flex flex-wrap max-w-full">
                {paginatedInvitations.map((invitation, index) => (
                    <div key={index} className="w-1/4 p-4">
                        <Card 
                            invitedName={`Invitado: ${invitation.invitedName}`}
                        />
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-4 mb-4 space-x-4">
                <GenericButton
                    content="Anterior"
                    backgroundColor="bg-[var(--button-bg)] hover:bg-[var(--button-hover-bg)] transition duration-300 ease-in-out"
                    textColor="text-white"
                    width="w-[120px]"
                    height="h-[40px]"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                />

                <GenericButton
                    content="Siguiente"
                    backgroundColor="bg-[var(--button-bg)] hover:bg-[var(--button-hover-bg)] transition duration-300 ease-in-out"
                    textColor="text-white"
                    width="w-[120px]"
                    height="h-[40px]"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage * CARDS_PER_PAGE >= invitations.length}
                />
            </div>
        </div>
    );
};

export default Dashboard;