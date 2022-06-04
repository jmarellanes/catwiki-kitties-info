import styles from 'styles/modules/breed-gallery.module.scss';

function BreedGallery({ breedDetails }) {
	const BreedGallerySection = () => {
		const formattedBreedDetails = breedDetails.slice(1, 9);

		return formattedBreedDetails.map(image => (
			<div className={styles['gallery__image']} key={image.id}>
				<img src={image.thumbnails.large.url} alt={'Cat'} />
			</div>
		));
	};

	return (
		<section className={styles['gallery']}>
			<h2 className={`${styles['gallery__title']} h3`}>Other Photos</h2>
			<div className={styles['gallery__container']}>
				{<BreedGallerySection />}
			</div>
		</section>
	);
}

export default BreedGallery;
