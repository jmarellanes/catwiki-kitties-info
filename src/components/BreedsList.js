import { Link } from 'react-router-dom';
import { getRangeToShow } from '../utils/utils';

import styles from 'styles/modules/breeds-list.module.scss';

function BreedsList({ rawBreedsData, showInHome }) {
	const { breedsList } = rawBreedsData;

	const { minRange, maxRange } = getRangeToShow(showInHome);
	const formattedBreeds = breedsList.slice(minRange, maxRange);

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
