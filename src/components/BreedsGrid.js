import { Link } from 'react-router-dom';
import { getRangeToShow } from '../utils/utils';

import styles from 'styles/modules/breeds-grid.module.scss';

function BreedsGrid({ rawBreedsData, showInHome }) {
	const { breedsByName } = rawBreedsData;

	const { minRange, maxRange } = getRangeToShow(showInHome);
	const formattedBreeds = breedsByName.slice(minRange, maxRange);

	return (
		<div className={styles['breeds-grid']}>
			{formattedBreeds.map(breed => {
				const br = breed.fields;

				return (
					<article key={br.ID} className={styles['breeds-grid__item']}>
						<h3 className='visually-hidden'>
							Click to go to article about {br.Name} breed
						</h3>

						<Link
							to='#0'
							className={styles['breeds-grid__image-container']}
						>
							<img
								src={br.Images[1].thumbnails['large'].url}
								alt={`${br.Name} cat breed`}
								className={styles['breeds-grid__image']}
							/>
						</Link>

						<p className={styles['breeds-grid__name']}>{br.Name}</p>
					</article>
				);
			})}
		</div>
	);
}

export default BreedsGrid;
