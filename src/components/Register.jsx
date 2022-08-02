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
      navigate('/Home');
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <div className={styles.containerL} >
      <div className={styles.containerLogin}>
        {error && <h4>{error} </h4>}
        <h4 className={styles.titulo}>¡Aquí crea tu cuenta!</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'></label>
          <input className={styles.email}
            type='text'
            name='email'
            placeholder='Correo'
            onChange={handleChange}
          />
          <label htmlFor='password'></label>
          <input className={styles.password}
            type='password'
            name='password'
            placeholder='Contraseña'
            id='password'
            onChange={handleChange}
          />
          <button className={styles.registrar}>Registrar</button>
        </form>
        {/* <h4 className={styles.titleregistrar}>¿Ya tienes cuenta con Equilibrium?</h4> */}
        <a href='/Login'>
          <button className={styles.registro}>Inicia sesión aquí</button>
        </a>
      </div>
      </div>
    </>
  );
}