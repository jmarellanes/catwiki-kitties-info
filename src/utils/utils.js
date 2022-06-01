export function getRandomRangeToShow(breedsToShow) {
	const BREEDS = { TOTAL: 21 };
	const numberOfBreeds = BREEDS.TOTAL - breedsToShow;

	if (!breedsToShow) return { minRange: 0, maxRange: BREEDS.TOTAL };

	const minRange = Math.floor(Math.random() * numberOfBreeds);
	const maxRange = minRange + breedsToShow;
	return { minRange, maxRange };
}
