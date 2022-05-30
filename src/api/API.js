import axios from 'axios';

export const getBreeds = async () => {
	const { data } = await axios.get('/api/getBreeds');
	return data;
};

export const getBreedDetails = async breedID => {
	const { data } = await axios.get(`/api/getBreedDetails?id=${breedID}`);
	return data;
};
