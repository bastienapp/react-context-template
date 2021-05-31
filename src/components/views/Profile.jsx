import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import MainLayout from '../layouts/MainLayout';

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <MainLayout>
      <h1>Mon profil</h1>
      <ul>
        <li>Nom: {user?.name?.last}</li>
        <li>Prénom: {user?.name?.first}</li>
        <li>Email: {user?.email}</li>
      </ul>
    </MainLayout>
  );
}

export default Profile;
