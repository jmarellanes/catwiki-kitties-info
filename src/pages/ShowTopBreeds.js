import { useGetBreeds } from 'hooks/useGetBreeds';
import BreedsList from 'components/BreedsList';

import styles from 'styles/modules/page-show-top-breeds.module.scss';

function ShowTopBreeds() {
	const { data, isLoading } = useGetBreeds();

	const BreedsListContainer = () => {
		const breedsToShow = 10;
		const formattedBreeds = data.breedsByPopularity.slice(0, breedsToShow);

		return <BreedsList breedsByPopularity={formattedBreeds} />;
	};

	return (
		<div id={styles['show-top__wrapper']}>
			<h1 className={`h3--alt ${styles['show-top__title']}`}>
				Top 10 popular breeds
			</h1>

			<div className={styles['show-top__grid']}>
				{isLoading ? 'Loading' : <BreedsListContainer />}
			</div>
		</div>
	);
}

export default ShowTopBreeds;
