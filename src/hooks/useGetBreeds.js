import { useQuery } from 'react-query';
import { getBreeds, getBreedDetails } from 'api/API';

export const useGetBreeds = () => useQuery(['breeds'], getBreeds);

export const useGetBreedsDetails = breedId =>
	useQuery(['breedDetails', breedId], () => getBreedDetails(breedId));
