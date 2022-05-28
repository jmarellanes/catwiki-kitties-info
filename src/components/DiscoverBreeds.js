import { useGetBreeds } from 'hooks/useGetBreeds';

import SeeMoreLink from './SeeMoreLink';
import BreedsList from './BreedsList';

import styles from 'styles/modules/discover-breeds.module.scss';

function DiscoverBreeds() {
	const { data, isLoading } = useGetBreeds();

	return (
		<section className={styles.discover}>
			<div className={styles.discover__container}>
				<p className={styles.discover__subtitle}>
					Discover the right breed for you! ** Add random fn **
				</p>

				<div className={styles['discover__title-container']}>
					<h2 className={styles.discover__title}>
						66+ Breeds for you to discover
					</h2>

					<SeeMoreLink linkTo={'#0'} />
				</div>

				<>
					{isLoading ? (
						'Loading'
					) : (
						<BreedsList rawBreedsData={data} breedsToShow={4} />
					)}
				</>
			</div>
		</section>
	);
}

export default DiscoverBreeds;
