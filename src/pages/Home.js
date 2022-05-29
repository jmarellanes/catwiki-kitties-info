import Hero from 'components/Hero';
import DiscoverBreeds from 'components/DiscoverBreeds';
import WhyHaveCat from 'components/WhyHaveCat';

import styles from 'styles/modules/page-home.module.scss';

function Home() {
	return (
		<div id={styles.home__wrapper}>
			<Hero />
			<DiscoverBreeds />
			<WhyHaveCat />
		</div>
	);
}

export default Home;
