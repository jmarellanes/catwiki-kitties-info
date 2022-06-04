import BreedRatings from 'components/BreedRatings';
import styles from 'styles/modules/breed-info.module.scss';

function BreedInfo({ breedDetails, breedAttributes }) {
	const BreedAttributesSection = () => {
		return Object.entries(breedAttributes)
			.sort()
			.map(([key, value]) => (
				<div className={styles['info__group']} key={key}>
					<BreedRatings value={value}>{key}</BreedRatings>
				</div>
			));
	};

	return (
		<section className={styles['info']}>
			<div className={styles['info__info-container']}>
				<div className={styles['info__image']}>
					<img src={breedDetails.Images[0].url} alt='' />
				</div>

				<div className={styles['info__details']}>
					<h2 className={`${styles['info__title']} h3`}>
						{breedDetails['Name']}
					</h2>

					<p className={styles['info__description']}>
						{breedDetails['Description']}
					</p>

					<dl>
						<div className={styles['info__group']}>
							<dt className={styles['info__group-title']}>Temperament:</dt>
							<dd>{breedDetails['Temperament']}</dd>
						</div>

						<div className={styles['info__group']}>
							<dt className={styles['info__group-title']}>Origin:</dt>
							<dd>{breedDetails['Origin']}</dd>
						</div>

						<div className={styles['info__group']}>
							<dt className={styles['info__group-title']}>Life Span:</dt>
							<dd>{breedDetails['LifeSpan']} years</dd>
						</div>

						{<BreedAttributesSection />}
					</dl>
				</div>
			</div>
		</section>
	);
}

export default BreedInfo;
