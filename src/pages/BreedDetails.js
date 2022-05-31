import { useParams } from 'react-router-dom';
import { useGetBreedsDetails } from 'hooks/useGetBreeds';
import BreedRatings from 'components/BreedRatings';

import styles from 'styles/modules/page-breed-details.module.scss';

function BreedDetails() {
	const { breedId } = useParams();
	const { data, isLoading } = useGetBreedsDetails(breedId);

	const BreedAttributesSection = () => {
		return Object.entries(data.breedAttributes)
			.sort()
			.map(([key, value]) => (
				<div className={styles['info__group']} key={key}>
					<BreedRatings value={value}>{key}</BreedRatings>
				</div>
			));
	};

	const BreedGallerySection = () => {
		const formattedBreedDetails = data.breedDetails.Images.slice(1, 9);

		return formattedBreedDetails.map(image => (
			<div className={styles['gallery__image']} key={image.id}>
				<img src={image.thumbnails.large.url} alt={'Cat'} />
			</div>
		));
	};

	if (isLoading) return 'Loading';

	return (
		<div id={styles['breed-details__wrapper']}>
			<section className={styles['info']}>
				<div className={styles['info__info-container']}>
					<div className={styles['info__image']}>
						<img src={data.breedDetails.Images[0].url} alt='' />
					</div>

					<div className={styles['info__details']}>
						<h1 className={`${styles['info__title']} h3`}>
							{data.breedDetails['Name']}
						</h1>

						<p className={styles['info__description']}>
							{data.breedDetails['Description']}
						</p>

						<dl>
							<div className={styles['info__group']}>
								<dt className={styles['info__group-title']}>
									Temperament:
								</dt>
								<dd>{data.breedDetails['Temperament']}</dd>
							</div>

							<div className={styles['info__group']}>
								<dt className={styles['info__group-title']}>Origin:</dt>
								<dd>{data.breedDetails['Origin']}</dd>
							</div>

							<div className={styles['info__group']}>
								<dt className={styles['info__group-title']}>Life Span:</dt>
								<dd>{data.breedDetails['LifeSpan']} years</dd>
							</div>

							{<BreedAttributesSection />}
						</dl>
					</div>
				</div>
			</section>

			<section className={styles['gallery']}>
				<h3 className={styles['gallery__title']}>Other Photos</h3>
				<div className={styles['gallery__container']}>
					{<BreedGallerySection />}
				</div>
			</section>
		</div>
	);
}

export default BreedDetails;
