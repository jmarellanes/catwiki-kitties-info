import { useParams } from 'react-router-dom';
import { useGetBreedsDetails } from 'hooks/useGetBreeds';

import BreedInfo from 'components/BreedInfo';
import BreedGallery from 'components/BreedGallery';
import styles from 'styles/modules/page-breed-details.module.scss';

function BreedDetails() {
	const { breedId } = useParams();
	const { data, isLoading } = useGetBreedsDetails(breedId);

	return (
		<div id={styles['breed-details__wrapper']}>
			{isLoading ? (
				'Loading'
			) : (
				<>
					<BreedInfo data={data} />
					<BreedGallery data={data} />
				</>
			)}
		</div>
	);
}

export default BreedDetails;
