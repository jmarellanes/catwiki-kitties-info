import { ReactComponent as Logo } from 'assets/images/catwiki--logo.svg';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<Link to='/' className={styles.header__brand}>
					<Logo />
				</Link>
			</div>
		</header>
	);
}

export default Header;
