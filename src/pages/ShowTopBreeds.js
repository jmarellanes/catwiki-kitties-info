import { useGetBreeds } from 'hooks/useGetBreeds';
import BreedsList from 'components/BreedsList';
import Loader from 'utils/Loader';
import { ErrorGeneral } from 'utils/ErrorMessages';

import styles from 'styles/modules/page-show-top-breeds.module.scss';

function ShowTopBreeds() {
	const { data, isLoading, isError } = useGetBreeds();

	const BreedsListContainer = () => {
		const breedsToShow = 10;
		const formattedBreeds = data.breedsByPopularity.slice(0, breedsToShow);

		return <BreedsList breedsByPopularity={formattedBreeds} />;
	};

	if (isLoading) {
		return (
			<div id={styles['show-top__wrapper']}>
				<Loader />
			</div>
		);
	}

	if (isError) {
		return (
			<div id={styles['show-top__wrapper']}>
				<ErrorGeneral />
			</div>
		);
	}

	return (
		<div id={styles['show-top__wrapper']}>
			<h2 className={`h3--alt ${styles['show-top__title']}`}>
				Top 10 popular breeds
			</h2>

			<div className={styles['show-top__grid']}>
				{<BreedsListContainer />}
			</div>
		</div>
	);
}

export default ShowTopBreeds;
