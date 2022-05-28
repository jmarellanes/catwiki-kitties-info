import DiscoverBreeds from 'components/DiscoverBreeds';
import Header from 'components/Header';
import Hero from 'components/Hero';
import styles from './home.module.scss';

function Home() {
	return (
		<div id={styles.home__wrapper}>
			<Header />
			<main>
				<Hero />
				<DiscoverBreeds />
			</main>
			<footer className='visually-hidden'>I'm the footer</footer>
		</div>
	);
}

export default Home;
