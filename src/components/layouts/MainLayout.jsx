import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../commons/Navigation';

function MainLayout({ children }) {
  return (
    <div className="MainLayout">
      <header>
        <Navigation>
          <Link to="/">Accueil</Link>
          <Link to="/login">Se connecter</Link>
          <Link to="/profile">Mon profil</Link>
        </Navigation>
        <main>{children}</main>
      </header>
    </div>
  );
}

export default MainLayout;
