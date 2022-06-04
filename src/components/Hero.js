import Search from './Search';
import { ReactComponent as Logo } from 'assets/images/catwiki--logo.svg';
import Data from 'utils/breeds-list.json';

import styles from 'styles/modules/hero.module.scss';

function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__container}>
				<div className={styles.hero__logo}>
					<Logo />
				</div>

				<h2 className={`${styles.hero__text} h1`}>
					Get to know more about your cat breed
				</h2>

				<Search breedsList={Data} />
			</div>
		</section>
	);
}

export default Hero;
