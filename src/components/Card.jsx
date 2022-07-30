import arbol from '../../img/arbol.png'

const Card = (accion) => {
	return (
		<>
			<div id='flip-card' className='flip-card'>
				<div className='flip-card-inner'>
					<div className='flip-card-front' id='poster'>
						<img src={accion.imagen} />
					</div>
					<div className='flip-card-back'>
						<h1 id='title'>${accion.titulo}</h1>
						<p id='rel ease_date'>${accion.descripcion}</p>
						<input type='file' />
            <button><img src={arbol} alt="" /></button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
