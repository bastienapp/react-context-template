import axios from 'axios';
import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import MainLayout from '../layouts/MainLayout';

function Login() {
  const { setUser } = useContext(UserContext);

  const fakeLogin = (e) => {
    e.preventDefault();
    axios.get('https://randomuser.me/api/').then((response) => {
      const user = response.data.results[0];
      console.log(user);
      // TODO save user in the context
      setUser(user);
    });
  };

  return (
    <MainLayout>
      <h1>Se connecter</h1>
      <form className="Login" onSubmit={fakeLogin}>
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
