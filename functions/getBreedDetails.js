const { catsTable } = require('./utils/airtable');

exports.handler = async event => {
	const breedID = event.queryStringParameters.id;

	try {
		const breedRecords = await catsTable
			.select({
				filterByFormula: `{ID} = '${breedID}'`,
				fields: [
					'Name',
					'ID',
					'PopularityRank',
					'Description',
					'Images',
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

		const breedDetails = breedRecords.map(breed => {
			return breed.fields;
		});

		return {
			statusCode: 200,
			body: JSON.stringify(breedDetails),
		};
	} catch (err) {
		console.log(err);

		return {
			statusCode: 500,
			body: JSON.stringify(err),
		};
	}
};
