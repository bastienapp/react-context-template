import React from 'react';
import MainLayout from '../layouts/MainLayout';

function Profile() {
  return (
    <MainLayout>
      <h1>Mon profil</h1>
      <ul>
        <li>Nom:</li>
        <li>Prénom:</li>
        <li>Email:</li>
      </ul>
    </MainLayout>
  );
}

export default Profile;
