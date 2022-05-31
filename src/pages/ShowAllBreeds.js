import { useGetBreeds } from 'hooks/useGetBreeds';
import BreedsGrid from 'components/BreedsGrid';

import styles from 'styles/modules/page-show-all-breeds.module.scss';

function ShowAllBreeds() {
	const { data, isLoading } = useGetBreeds();

	return (
		<div id={styles['show-all__wrapper']}>
			<h1 className={`h3--alt ${styles['show-all__title']}`}>
				Discover your favorite breed!
			</h1>

			<div className={styles['show-all__grid']}>
				{isLoading ? (
					'Loading'
				) : (
					<BreedsGrid breedsByName={data.breedsByName} />
				)}
			</div>
		</div>
	);
}

export default ShowAllBreeds;
