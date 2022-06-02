import { Link } from 'react-router-dom';
import styles from 'styles/utils/loader.module.scss';

export const ErrorNoID = () => (
	<div div className={styles.loader__container}>
		<div div className={styles.loader__content}>
			<h3>
				Hmm... We're having a problem. There is no Breed with this ID
			</h3>
			<p>Got a suggestion? Found a bug that needs to be squashed?</p>
			<p>We love hearing about new ideas to improve our app.</p>

			<div className='loader__redirect'>
				<p>
					Go to&nbsp;
					<Link to='/'>CatWiki</Link>
					&nbsp;home
				</p>
			</div>
		</div>
	</div>
);

export const ErrorGeneral = () => (
	<div div className={styles.loader__container}>
		<div div className={styles.loader__content}>
			<h3>Hmm.. We're having a problem.</h3>
			<p>Got a suggestion? Found a bug that needs to be squashed?</p>
			<p>We love hearing about new ideas to improve our app.</p>

			<div>
				<h3>Please refresh your browser</h3>
			</div>
		</div>
	</div>
);
