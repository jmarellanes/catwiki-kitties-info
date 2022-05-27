import { useGetBreeds } from 'hooks/useGetBreeds';

import BreedsList from 'components/BreedsList';
import Header from 'components/Header';
import Hero from 'components/Hero';
import styles from './home.module.scss';

function Home() {
	const { data } = useGetBreeds();
	console.log(data);

	return (
		<div id={styles.home__wrapper}>
			<Header />
			<main>
				<Hero />
				<BreedsList />
			</main>
			<footer className='visually-hidden'>I'm the footer</footer>
		</div>
	);
}

export default Home;
