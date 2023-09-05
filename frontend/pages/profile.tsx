import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { profileRequest } from "../api/auth";
import { useRouter } from 'next/router';
import NavBar from "../src/components/NavBar/NavBar";

const Profile = () => {

  const TOKEN = useSelector((state: { user: { token: string } }) => state.user.token);
  const USER = useSelector((state: { user: { user: string } }) => state.user.user);
  const router  = useRouter();
  console.log(TOKEN);
  console.log(USER);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await profileRequest(TOKEN);
      } catch (error) {
        router.push('/');
      }
    };
  
    if (TOKEN) {
      localStorage.setItem('token', JSON.stringify(TOKEN));
      fetchData();
    } else if (!localStorage.getItem('token')) {
      router.push('/');
    }
  }, [TOKEN]);
  
  return (
    <div className="flex flex-col w-full h-full">
      <div>
        <NavBar />
      </div> 
    </div>
  );
};

export default Profile;