import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/images/catwiki--logo.svg';

import styles from '../styles/modules/footer.module.scss';

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<Link to='/' className={styles.footer__link}>
					<Logo />
				</Link>
			</div>
		</footer>
	);
}

export default Footer;
