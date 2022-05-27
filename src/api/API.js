import axios from 'axios';

export const getBreeds = async () => {
	let { data } = await axios.get('/api/getBreeds');
	return data;
};
