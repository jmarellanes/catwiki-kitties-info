import Header from 'components/Header';
import styles from './home.module.scss';

function Home() {
	return (
		<div id={styles.home__wrapper}>
			<Header />
			<main>I'm the main content</main>
			<footer>I'm the footer</footer>
		</div>
	);
}

export default Home;
