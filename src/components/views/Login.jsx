import React from 'react';
import MainLayout from '../layouts/MainLayout';

function Login() {
  return (
    <MainLayout>
      <h1>Se connecter</h1>
      <form className="Login">
        <fieldset>
          <label htmlFor="email">
            <span>Email: </span>
            <input id="email" name="email" type="email" />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="password">
            <span>Mot de passe: </span>
            <input id="password" name="password" type="password" />
          </label>
        </fieldset>
        <input type="submit" value="Se connecter" />
      </form>
    </MainLayout>
  );
}

export default Login;
