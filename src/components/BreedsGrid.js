import { Link } from 'react-router-dom';

import styles from 'styles/modules/breeds-grid.module.scss';

function BreedsGrid({ breedsByName, isInHome }) {
	return (
		<div className={styles['breeds-grid']}>
			{breedsByName.map(breed => {
				const br = breed.fields;

				return (
					<article key={br.ID} className={styles['breeds-grid__item']}>
						<h3 className='visually-hidden'>
							Click to go to article about {br.Name} breed
						</h3>

						<Link
							to={`/breed/${br.ID}`}
							className={`${styles['breeds-grid__image-container']} ${
								isInHome ? styles['breeds-grid__image-show-bar'] : ''
							}`}
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
