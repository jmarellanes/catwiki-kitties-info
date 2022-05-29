export function getRangeToShow(showInHome) {
	const BREEDS = { TOTAL: 21, SHOW: 4 };
	const numberOfBreeds = BREEDS.TOTAL - BREEDS.SHOW;

	if (!showInHome) return { minRange: 0, maxRange: BREEDS.TOTAL };

	const minRange = Math.floor(Math.random() * numberOfBreeds);
	const maxRange = minRange + BREEDS.SHOW;
	return { minRange, maxRange };
}
