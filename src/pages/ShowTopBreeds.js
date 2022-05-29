import { useGetBreeds } from 'hooks/useGetBreeds';

import styles from 'styles/modules/page-show-top-breeds.module.scss';

function ShowTopBreeds() {
	const { data, isLoading } = useGetBreeds();

	return (
		<div id={styles['show-top__wrapper']}>
			<h1 className={`h3--alt ${styles['show-top__title']}`}>
				Top 10 popular breeds
			</h1>
			{/* {isLoading ? 'Loading' : <Breeds rawBreedsData={data} />} */}
		</div>
	);
}

export default ShowTopBreeds;
