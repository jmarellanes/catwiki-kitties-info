import SectionLink from './SectionLink';
import IMAGES from 'assets/images/index';

import styles from 'styles/modules/why-have-cat.module.scss';

function WhyHaveCat() {
	return (
		<section className={styles['why-have']}>
			<div className={styles['why-have__container']}>
				<div className={styles['why-have__panel-info']}>
					<h2 className={styles['why-have__title']}>
						Why should you have a cat?
					</h2>

					<p className={styles['why-have__text']}>
						Having a cat around you can actually trigger the release of
						calming chemicals in your body which lower your stress and
						anxiety levels
					</p>

					<SectionLink linkTo='/top-breeds'>
						top 10 popular breeds
					</SectionLink>
				</div>

				<div className={styles['why-have__panel-images']}>
					{IMAGES.map((image, i) => (
						<img
							src={image.cat}
							alt={image.alt}
							key={image.cat}
							className={styles[`why-have__panel-images--${i + 1}`]}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default WhyHaveCat;
