import Search from './Search';
import { ReactComponent as Logo } from 'assets/images/catwiki--logo.svg';

import styles from 'styles/modules/hero.module.scss';

function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__container}>
				<div className={styles.hero__logo}>
					<Logo />
				</div>

				<p className={`${styles.hero__text} h1`}>
					Get to know more about your cat breed
				</p>

				<Search />
			</div>
		</section>
	);
}

export default Hero;
