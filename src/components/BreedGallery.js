import styles from 'styles/modules/breed-gallery.module.scss';

function BreedGallery({ data }) {
	const BreedGallerySection = () => {
		const formattedBreedDetails = data.breedDetails.Images.slice(1, 9);

		return formattedBreedDetails.map(image => (
			<div className={styles['gallery__image']} key={image.id}>
				<img src={image.thumbnails.large.url} alt={'Cat'} />
			</div>
		));
	};

	return (
		<section className={styles['gallery']}>
			<h3 className={styles['gallery__title']}>Other Photos</h3>
			<div className={styles['gallery__container']}>
				{<BreedGallerySection />}
			</div>
		</section>
	);
}

export default BreedGallery;
