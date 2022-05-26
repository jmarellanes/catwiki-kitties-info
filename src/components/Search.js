import { ReactComponent as SearchIcon } from 'assets/images/icon--search.svg';
import styles from './search.module.scss';

function Search() {
	const handleSubmit = e => {
		e.preventDefault();
	};

	return (
		<form
			role='search'
			onSubmit={handleSubmit}
			className={styles.search__form}
		>
			<label htmlFor='hero-search' className='visually-hidden'></label>

			<input
				type='text'
				id='hero-search'
				placeholder='Enter your breed'
				className={`form__field ${styles.search__field}`}
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
		</form>
	);
}

export default Search;
