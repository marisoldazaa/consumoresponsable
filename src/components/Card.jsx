import arbol from '../img/arbol.png'
import style from './Card.module.css'
import Swal from 'sweetalert2';


const Card = (dataAccion) => {
	const {dataAccion: nuevaData} = dataAccion;

	const submitHandle = () => {
		console.log('Hola')
		return new Swal ({
			title: 'Enviado',
			text: 'Gracias por reducir tu huella',
			imageUrl: 'https://firebasestorage.googleapis.com/v0/b/consumoresponsable-04.appspot.com/o/DataAcciones%2FLogo.png?alt=media&token=a66edd2d-86f1-4c59-943c-364e12fc398c',
			imageWidth: 200,
			imageHeight: 200,
			imageAlt: 'Logo',
		})
	}


	return (
		<>
			<div id='flip-card' className={style.flipCard}>
				<div className={style.flipCardInner}>
					<div className={style.flipCardFront} id='poster'>
						<img src={nuevaData.imagen} />
					</div>
					<div className={style.flipCardBack}>
						<h5>{nuevaData.titulo}</h5>
						<p>{nuevaData.descripcion}</p>
						<p>Puntos: {nuevaData.valor}</p>
						<div className={style.submitButton}>
							<input type='file' placeholder='Adjunta'/>
							<button onClick={() => {submitHandle()}} ><img src={arbol} alt="Boton enviar" /></button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
