
import { useAuth } from '../context/authContext';
import styles from './Home.module.css';

export function Home() {
  const { user, logout, loading } = useAuth();
  
  
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {}
  };
  if (loading) return <h1>loading</h1>;
  return (
    <div className={styles.containerHome}>
      <div >
        <h1>BIENVENID@ {user.displayName || user.email}</h1>
        <button onClick={handleLogout}>logout</button>
      </div>
      
      
     
    </div>
  );
}



