import { Link } from 'react-router-dom';

import styles from 'styles/modules/breeds-list.module.scss';

function BreedsList({ breedsByPopularity }) {
	return (
		<div className={styles['breeds-list']}>
			{breedsByPopularity.map((breed, i) => {
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

						<div className={styles['breeds-list__info-container']}>
							<p className={`${styles['breeds-list__name']} h3`}>
								{`${i + 1}. `}
								{}
								{br.Name}
							</p>
							<p className={styles['breeds-list__description']}>
								{br.Description}
							</p>
						</div>
					</article>
				);
			})}
		</div>
	);
}

export default BreedsList;
