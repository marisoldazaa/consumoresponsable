import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
export function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { login, loginGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });
  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      await login(user.email, user.password);
      navigate('/Home');
    } catch (error) {
      setError(error.message);
    }
  };
  const handleGoogleSignin = async () => {
    try {
      await loginGoogle();
      navigate('/Home');
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <header>
        <h1>Comsuresp</h1>
      </header>
      <div className={styles.containerLogin}>
        {error && <h4 data-testid='mensaje-error'>{error} </h4>}
        <h4 className={styles.titulo}>BIENVENID@ INGRESA AQUI</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'></label>
          <input
            type='text'
            name='email'
            placeholder='Email'
            onChange={handleChange}
          />
          <label htmlFor='password'></label>
          <input
            type='password'
            name='password'
            placeholder='Contraseña'
            id='password'
            onChange={handleChange}
          />
          <button className={styles.login}>Iniciar sesión</button>
        </form>
        <button className={styles.loginGoogle} onClick={handleGoogleSignin}>
          <img
            className={styles.logo}
            /* src={require('../img/Google.png')}
            alt='logo Google' */
          />
          Iniciar con Google
        </button>
        <h4>¿Aún no tienes cuenta con Comsuresp?</h4>
        <a href='/Register'>
          <button className={styles.registro}>Regístrate aqui</button>
        </a>
      </div>
    </>
  );
}









