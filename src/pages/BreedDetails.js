import { useParams } from 'react-router-dom';
import { useGetBreedsDetails } from 'hooks/useGetBreeds';

import BreedInfo from 'components/BreedInfo';
import BreedGallery from 'components/BreedGallery';
import Loader from 'utils/Loader';
import { ErrorNoID } from 'utils/ErrorMessages';

import styles from 'styles/modules/page-breed-details.module.scss';

function BreedDetails() {
	const { breedId } = useParams();
	const { data, isLoading, isError } = useGetBreedsDetails(breedId);

	if (isLoading) {
		return (
			<div id={styles['breed-details__wrapper']}>
				<Loader />
			</div>
		);
	}

	if (isError) {
		return (
			<div id={styles['breed-details__wrapper']}>
				<ErrorNoID />
			</div>
		);
	}

	return (
		<div id={styles['breed-details__wrapper']}>
			<BreedInfo
				breedDetails={data.breedDetails}
				breedAttributes={data.breedAttributes}
			/>
			<BreedGallery breedDetails={data.breedDetails.Images} />
		</div>
	);
}

export default BreedDetails;
