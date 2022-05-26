import { Link } from 'react-router-dom';
import { ReactComponent as ArrowRight } from 'assets/images/icon--arrow-long.svg';

import styles from './breedslist.module.scss';

function BreedsList() {
	return (
		<section className={styles.breeds}>
			<div className={styles.breeds__container}>
				<p className={styles.breeds__subtitle}>Most searches breeds</p>
				<div className={styles['breeds__title-container']}>
					<h2 className={styles.breeds__title}>
						66+ Breeds for you to discover
					</h2>
					<Link to='/' className={styles.breeds__link}>
						See More <ArrowRight />
					</Link>
				</div>
			</div>
		</section>
	);
}

export default BreedsList;
