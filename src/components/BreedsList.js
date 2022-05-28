import { Link } from 'react-router-dom';

import styles from 'styles/modules/breeds-list.module.scss';

function BreedsList({ rawBreedsData, breedsToShow }) {
	const { breedsList } = rawBreedsData;
	const formattedBreeds = breedsList.slice(0, breedsToShow);

	return (
		<div className={styles['breeds-list']}>
			{formattedBreeds.map(breed => {
				const br = breed.fields;

				return (
					<article key={br.ID} className={styles['breeds-list__item']}>
						<h3 className='visually-hidden'>
							Click to go to article about {br.Name} breed
						</h3>

						<Link
							to='#0'
							className={styles['breeds-list__image-container']}
						>
							<img
								src={br.Images[1].thumbnails['large'].url}
								alt={`${br.Name} cat breed`}
								className={styles['breeds-list__image']}
							/>
						</Link>

						<p className={styles['breeds-list__name']}>{br.Name}</p>
					</article>
				);
			})}
		</div>
	);
}

export default BreedsList;
