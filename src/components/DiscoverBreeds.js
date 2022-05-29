import { useGetBreeds } from 'hooks/useGetBreeds';

import SectionLink from './SectionLink';
import BreedsGrid from './BreedsGrid';
import { getRangeToShow } from '../utils/utils';

import styles from 'styles/modules/discover-breeds.module.scss';

function DiscoverBreeds() {
	const { data, isLoading } = useGetBreeds();

	const renderComponent = () => {
		const breedsToShow = 4;

		const { minRange, maxRange } = getRangeToShow(breedsToShow);
		const formattedBreeds = data.breedsByName.slice(minRange, maxRange);

		return <BreedsGrid breedsByName={formattedBreeds} />;
	};

	return (
		<section className={styles.discover}>
			<div className={styles.discover__container}>
				<p className={styles.discover__subtitle}>
					Discover the right breed for you!
				</p>

				<div className={styles['discover__title-container']}>
					<h2 className={styles.discover__title}>
						66+ Breeds for you to discover
					</h2>

					<SectionLink linkTo='/all-breeds'>
						Discover more breeds
					</SectionLink>
				</div>

				<>{isLoading ? 'Loading' : renderComponent()}</>
			</div>
		</section>
	);
}

export default DiscoverBreeds;
