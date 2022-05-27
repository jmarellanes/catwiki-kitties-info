import { useQuery } from 'react-query';
import { getBreeds } from 'api/API';

export const useGetBreeds = () => useQuery(['breeds'], getBreeds);
