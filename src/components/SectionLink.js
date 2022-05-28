import { Link } from 'react-router-dom';
import { ReactComponent as ArrowRight } from 'assets/images/icon--arrow-long.svg';

import styles from 'styles/modules/see-more-link.module.scss';

export default function SectionLink({ children, linkTo }) {
	return (
		<Link to={linkTo} className={styles.link}>
			{children} <ArrowRight />
		</Link>
	);
}
