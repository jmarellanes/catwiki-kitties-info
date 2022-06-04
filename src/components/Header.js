import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/images/catwiki--logo.svg';

import styles from 'styles/modules/header.module.scss';

function Header() {
	const { pathname } = useLocation();

	const heading = {
		'home-page': 'CatWiki - Get to know more about your cat breed',
		'all-breeds': '66+ Breeds for you to discover',
		'top-breeds': 'List of top 10 popular cat breeds',
		'detailed-breed': 'Details about your cat breed',
	};

	const renderHeader = () => {
		switch (pathname) {
			case '/':
				return heading['home-page'];
			case '/all-breeds':
				return heading['all-breeds'];
			case '/top-breeds':
				return heading['top-breeds'];
			default:
				return heading['detailed-breed'];
		}
	};

	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<h1 className='visually-hidden'>{renderHeader()}</h1>

				<Link to='/' className={styles.header__link}>
					<Logo />
				</Link>
			</div>
		</header>
	);
}

export default Header;
