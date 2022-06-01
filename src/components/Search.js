import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as SearchIcon } from 'assets/images/icon--search.svg';

import styles from 'styles/modules/search.module.scss';

function Search({ breedsList }) {
	const [query, setQuery] = useState('');
	const [filteredBreeds, setFilteredBreeds] = useState([]);
	const navigate = useNavigate();

	const handleSubmit = e => {
		e.preventDefault();
		if (filteredBreeds.length !== 1) return;

		navigate(`/breed/${filteredBreeds[0].ID}`);
	};

	const filterData = breedsList.filter(breed => {
		return breed.Name.toLowerCase().includes(query.toLowerCase());
	});

	useEffect(() => {
		if (query === '') return setFilteredBreeds([]);

		setFilteredBreeds(filterData);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	const QueryResults = () => (
		<div className={styles.search__container}>
			<ul className={styles.search__element}>
				{filteredBreeds.map(breed => {
					return (
						<li className={styles.search__item} key={breed.ID}>
							<Link
								to={`/breed/${breed.ID}`}
								className={styles.search__link}
							>
								{breed.Name}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);

	return (
		<form
			role='search'
			onSubmit={handleSubmit}
			className={styles.search__form}
		>
			<label htmlFor='hero-search' className='visually-hidden'>
				Search cat breed
			</label>

			<input
				type='text'
				id='hero-search'
				placeholder='Enter your breed'
				className={`form__field ${styles.search__field}`}
				value={query}
				onChange={e => setQuery(e.target.value)}
			/>

			<button
				type='submit'
				className={styles.search__button}
				aria-labelledby='button-label'
			>
				<span id='button-label' hidden>
					Submit Search
				</span>
				<SearchIcon />
			</button>

			{filteredBreeds.length !== 0 && <QueryResults />}
		</form>
	);
}

export default Search;
