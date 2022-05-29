import { useGetBreeds } from 'hooks/useGetBreeds';

import SectionLink from './SectionLink';
import BreedsGrid from './BreedsGrid';

import styles from 'styles/modules/discover-breeds.module.scss';

function DiscoverBreeds() {
	const { data, isLoading } = useGetBreeds();

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

				<>
					{isLoading ? (
						'Loading'
					) : (
						<BreedsGrid rawBreedsData={data} showInHome={true} />
					)}
				</>
			</div>
		</section>
	);
}

export default DiscoverBreeds;
