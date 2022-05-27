import BreedsList from 'components/BreedsList';
import Header from 'components/Header';
import Hero from 'components/Hero';
import styles from './home.module.scss';

import axios from 'axios';
import { useEffect } from 'react';

function Home() {
	const getBreed = async () => {
		let res = await axios.get('/api/getBreeds');

		const datos = res.data;
		console.log(datos);
	};

	useEffect(() => {
		getBreed();
	});

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
