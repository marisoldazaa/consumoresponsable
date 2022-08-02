import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import logo from '../img/Logo.png';

export function Home() {
	return (
		<div className={styles.containerHome}>
			<nav className={styles.navbarHome}>
				<img className={styles.logoHome} src={logo} alt='logoHome' />
				<Link className={styles.navbarRedirect} to={'/Login'}>
					Medidas para reducir mi huella
				</Link>
				<Link className={styles.navbarRedirect} to={'/Login'}>
					Redime tu bono
				</Link>
				<Link className={styles.navbarRedirect} to={'/Login'}>
					Tus árboles{' '}
				</Link>
				<Link className={styles.navbarRedirect} to={'/Login'}>
					Empieza ahora
				</Link>
			</nav>
			<div>
				<div className={styles.containerIntro}>
					<h4>¿Qué es la huella de carbono?</h4>
					<p>
						Es aquella marca que cada individuo deja sobre el entorno que le
						rodea. Con tus actividades diarias emites CO2eq y gases de efecto
						invernadero de forma directa o indirecta; va en función del cambio
						climático y el calentamiento global, posee causas, consecuencias y
						medidas para reducirla.
					</p>

          <button className={styles.botonHome}><a href="https://footprintcalculator.henkel.com/co" target="_blank" rel='noopener noreferrer'>Calcula tu huella</a></button>
				</div>
			</div>
		</div>
	);
}
