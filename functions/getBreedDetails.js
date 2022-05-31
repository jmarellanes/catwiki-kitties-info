// import { renameKeys } from '../src/utils/utils';
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

		const breedFullDetails = breedRecords.map(breed => {
			return breed.fields;
		});

		// prettier-ignore
		const [
			{
				Affection, StrangerFriendly, Adaptability, ChildFriendly, Health, Grooming, Intelligence,SocialNeeds,
				...breedDetails
			},
		] = breedFullDetails;

		// prettier-ignore
		const [
			{
				Name, ID, PopularityRank, Description, Images, Origin, LifeSpan, Temperament,
				...restAttributes
			},
		] = breedFullDetails;

		// Rename properties for easy use in frontend
		function renameKeys(keysMap, obj) {
			return Object.keys(obj).reduce(
				(acc, key) => ({
					...acc,
					...{ [keysMap[key] || key]: obj[key] },
				}),
				{},
			);
		}

		const breedAttributes = renameKeys(
			{
				Affection: 'Affection Level',
				ChildFriendly: 'Child Friendly',
				Health: 'Health Issues',
				SocialNeeds: 'Social Needs',
				StrangerFriendly: 'Stranger Friendly',
			},
			restAttributes,
		);

		return {
			statusCode: 200,
			body: JSON.stringify({
				breedDetails,
				breedAttributes,
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
