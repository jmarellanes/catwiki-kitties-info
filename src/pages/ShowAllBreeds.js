import BreedsList from 'components/BreedsList';
import { useGetBreeds } from 'hooks/useGetBreeds';
import styles from 'styles/modules/page-show-all-breeds.module.scss';

function ShowAllBreeds() {
	const { data, isLoading } = useGetBreeds();

	return (
		<div id={styles['show-all__wrapper']}>
			<h1 className={`h3--alt ${styles['show-all__title']}`}>
				Discover your favorite breed!
			</h1>
			{isLoading ? 'Loading' : <BreedsList rawBreedsData={data} />}
		</div>
	);
}

export default ShowAllBreeds;
