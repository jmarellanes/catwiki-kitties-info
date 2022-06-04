import { useGetBreeds } from 'hooks/useGetBreeds';
import BreedsGrid from 'components/BreedsGrid';
import Loader from 'utils/Loader';
import { ErrorGeneral } from 'utils/ErrorMessages';

import styles from 'styles/modules/page-show-all-breeds.module.scss';

function ShowAllBreeds() {
	const { data, isLoading, isError } = useGetBreeds();

	if (isLoading) {
		return (
			<div id={styles['show-all__wrapper']}>
				<Loader />
			</div>
		);
	}

	if (isError) {
		return (
			<div id={styles['show-all__wrapper']}>
				<ErrorGeneral />
			</div>
		);
	}

	return (
		<div id={styles['show-all__wrapper']}>
			<h2 className={`h3--alt ${styles['show-all__title']}`}>
				Discover your favorite breed!
			</h2>

			<div className={styles['show-all__grid']}>
				{<BreedsGrid breedsByName={data.breedsByName} />}
			</div>
		</div>
	);
}

export default ShowAllBreeds;
