import { useGetBreeds } from 'hooks/useGetBreeds';

import SectionLink from './SectionLink';
import BreedsGrid from './BreedsGrid';
import { getRandomRangeToShow } from '../utils/utils';
import Loader from 'utils/Loader';
import { ErrorGeneral } from 'utils/ErrorMessages';

import styles from 'styles/modules/discover-breeds.module.scss';

function DiscoverBreeds() {
	const { data, isLoading, isError } = useGetBreeds();

	const BreedsGridContainer = () => {
		const breedsToShow = 4;

		const { minRange, maxRange } = getRandomRangeToShow(breedsToShow);
		const formattedBreeds = data.breedsByName.slice(minRange, maxRange);

		return <BreedsGrid breedsByName={formattedBreeds} isInHome />;
	};

	const RenderContent = () => {
		if (isLoading) return <Loader />;
		if (isError) return <ErrorGeneral />;

		return <BreedsGridContainer />;
	};

	return (
		<section className={`${styles.discover} discover__breeds-to-show`}>
			<div className={styles.discover__container}>
				<p className={styles.discover__subtitle}>
					Discover the breed for you!
				</p>

				<div className={styles['discover__title-container']}>
					<h2 className={styles.discover__title}>
						66+ Breeds for you to discover
					</h2>

					<SectionLink linkTo='/all-breeds'>
						Discover more breeds
					</SectionLink>
				</div>

				{<RenderContent />}
			</div>
		</section>
	);
}

export default DiscoverBreeds;
