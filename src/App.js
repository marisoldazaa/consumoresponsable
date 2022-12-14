import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { AuthProvider } from './context/authContext';
import Accion from './components/Accion';

function App() {
	return (
		<div className='App'>
			<AuthProvider>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/Login' element={<Login />} />
					<Route path='/Register' element={<Register />} />
					<Route path='/Accion' element={<Accion />} />
				</Routes>
			</AuthProvider>
		</div>
	);
}

export default App;
