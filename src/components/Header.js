import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/images/catwiki--logo.svg';

import styles from 'styles/modules/header.module.scss';

function Header() {
	return (
		<header className={styles.header}>
			<h1 className='visually-hidden'>
				CatWiki - Get to know more about your cat breed
			</h1>
			<div className={styles.header__container}>
				<Link to='/' className={styles.header__link}>
					<Logo />
				</Link>
			</div>
		</header>
	);
}

export default Header;
