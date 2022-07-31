import arbol from '../img/arbol.png'
import style from './Card.module.css'
const Card = () => {
	return (
		<>
			<div id='flip-card' className={style.flipCard}>
				<div className={style.flipCardInner}>
					<div className={style.flipCardFront} id='poster'>
						<img src='' />
					</div>
					<div className={style.flipCardBack}>
						<h1 id='title'>titulo</h1>
						<p id='rel ease_date'>descripción</p>
						<label> Adjunta tu evidencia: </label>
						<input type='file' />
            			<button><img src={arbol} alt="" /></button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
