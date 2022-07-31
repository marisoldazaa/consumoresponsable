import Card from './Card';
import style from './Accion.module.css';
import { db } from '../firebase-controler/firebase';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

const Accion = () => {
	const [dataAcciones, setDataAcciones] = useState([]);
	// console.log(dataAcciones)
	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		const acciones = collection(db, 'Acciones');
		getDocs(acciones)
			.then(res => {
				const data = res.docs.map(doc => ({ ...doc.data(), id: doc.id }));
				setDataAcciones(data);
			})
			.catch(error => console.log(error.message));
	};

	return (
		<div className={style.container} >
      <img src='https://firebasestorage.googleapis.com/v0/b/consumoresponsable-04.appspot.com/o/DataAcciones%2FFrame%205.png?alt=media&token=6b69896b-2f80-4e1c-ab7f-2ba9162eaeb0' alt="" />
			<div className={style.cardContainer}>
				{dataAcciones &&
					dataAcciones.map((dataAccion, index) => (
						<Card key={index} dataAccion={dataAccion} />
					))}
			</div>
		</div>
	);
};

export default Accion;
