// Net
const { catsTable } = require('./utils/airtable');

exports.handler = async event => {
	try {
		const getByPopularity = catsTable
			.select({
				filterByFormula: "NOT({PopularityRank} = '')",
				sort: [{ field: 'PopularityRank' }],
				fields: ['Name', 'ID', 'PopularityRank', 'Description', 'Images'],
			})
			.all();

		const getByName = catsTable
			.select({
				filterByFormula: "NOT({PopularityRank} = '')",
				sort: [{ field: 'Name' }],
				fields: ['Name', 'ID', 'PopularityRank', 'Description', 'Images'],
			})
			.all();

		const [sortByPopularity, sortByName] = await Promise.all([
			getByPopularity,
			getByName,
		]);

		const breedsByPopularity = sortByPopularity.map(breed => ({
			fields: breed.fields,
		}));

		const breedsByName = sortByName.map(breed => ({
			fields: breed.fields,
		}));

		return {
			statusCode: 200,
			body: JSON.stringify({
				breedsByPopularity,
				breedsByName,
			}),
		};
	} catch (err) {
		console.log(err);

		return {
			statusCode: 500,
			body: JSON.stringify(err),
		};
	}
};

// let { data } = await axios.get('/api/getBreeds');
// return data;
