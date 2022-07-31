import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

export function Register() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });
  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      await signup(user.email, user.password);
      navigate('/Accion');
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <header>
        <h1>Equilibrium</h1>
      </header>
      <div className={styles.containerLogin}>
        {error && <h4>{error} </h4>}
        <h4 className='titulo'>BIENVENID@ INGRESA AQUI</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'></label>
          <input
            type='text'
            name='email'
            placeholder='Correo'
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
          <button className={styles.registrar}>Registrar</button>
        </form>
        <h4>¿ya tienes cuenta con Equilibrium?</h4>
        <a href='/'>
          <button className={styles.registro}>Inicia sesión aquí</button>
        </a>
      </div>
    </>
  );
}



