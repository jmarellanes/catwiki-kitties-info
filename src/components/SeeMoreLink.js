import { Link } from 'react-router-dom';
import { ReactComponent as ArrowRight } from 'assets/images/icon--arrow-long.svg';

import styles from './seemorelink.module.scss';

export default function SeeMoreLink({ linkTo }) {
	return (
		<Link to={linkTo} className={styles.link}>
			See More <ArrowRight />
		</Link>
	);
}
