// Net
const { catsTable } = require('./utils/airtable');

exports.handler = async event => {
	try {
		const breedsRecords = await catsTable
			.select({
				filterByFormula: "NOT({PopularityRank} = '')",
				sort: [{ field: 'PopularityRank' }],
				fields: [
					'Name',
					'ID',
					'PopularityRank',
					'Description',
					'Temperament',
					'Origin',
					'LifeSpan',
					'Adaptability',
					'Affection',
					'ChildFriendly',
					'Grooming',
					'Intelligence',
					'Health',
					'SocialNeeds',
					'StrangerFriendly',
				],
			})
			.all();
		const breedsList = breedsRecords.map(breed => ({
			fields: breed.fields,
		}));

		return {
			statusCode: 200,
			body: JSON.stringify({
				breedsList,
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
