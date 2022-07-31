import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { AuthProvider } from './context/authContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import Card from './components/Card';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route
            path='Home'
            element={
              <ProtectedRoute>
                {' '}
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path='Accion' element={<Card />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;







