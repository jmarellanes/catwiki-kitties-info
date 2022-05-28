import { Link } from 'react-router-dom';
import { useGetBreeds } from 'hooks/useGetBreeds';

import SeeMoreLink from './SeeMoreLink';

import styles from 'styles/modules/discover-breeds.module.scss';

function BreedsList() {
	const { data, isLoading } = useGetBreeds();

	const MostSearchedBreeds = ({ rawBreedsData, breedsToShow }) => {
		const { breedsList } = rawBreedsData;
		const formattedBreeds = breedsList.slice(0, breedsToShow);

		return formattedBreeds.map(breed => {
			const br = breed.fields;

			return (
				<article key={br.ID}>
					<h3 className='visually-hidden'>
						Click to go to article about {br.Name} breed
					</h3>
					<Link to='#0' className={styles['breeds__breed-image']}>
						<img
							src={br.Images[0].thumbnails['large'].url}
							alt={`${br.Name} cat breed`}
						/>
					</Link>
					<p className={styles['breeds__breed-name']}>{br.Name}</p>
				</article>
			);
		});
	};

	return (
		<section className={styles.breeds}>
			<div className={styles.breeds__container}>
				<p className={styles.breeds__subtitle}>
					Discover the right breed for you! ** Add random fn **
				</p>

				<div className={styles['breeds__title-container']}>
					<h2 className={styles.breeds__title}>
						66+ Breeds for you to discover
					</h2>

					<SeeMoreLink linkTo={'#0'} />
				</div>

				<div className={styles['breeds__most-searched']}>
					{isLoading ? (
						'Loading'
					) : (
						<MostSearchedBreeds rawBreedsData={data} breedsToShow={8} />
					)}
				</div>
			</div>
		</section>
	);
}

export default BreedsList;
