import styles from 'styles/modules/breed-info.module.scss';

function BreedRatings({ children, value }) {
	return (
		<>
			<dt className={styles['info__group-title']}>{children}:</dt>
			<dd className={styles['info__attr-system']}>
				<div className={`${styles[`info__attr-system--value-${value}`]}`}>
					<span className={styles['info__attr-system--item']}></span>
					<span className={styles['info__attr-system--item']}></span>
					<span className={styles['info__attr-system--item']}></span>
					<span className={styles['info__attr-system--item']}></span>
					<span className={styles['info__attr-system--item']}></span>
				</div>
			</dd>
		</>
	);
}

export default BreedRatings;
