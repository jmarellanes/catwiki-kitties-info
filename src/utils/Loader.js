import styles from 'styles/utils/loader.module.scss';

function Loader() {
	return (
		<div className={styles.loader__container}>
			<div className={styles.loader__title}>
				<span className={styles.loader__dots}>Loading...</span>
			</div>
		</div>
	);
}

export default Loader;
