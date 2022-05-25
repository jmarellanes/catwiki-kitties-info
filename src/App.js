import './App.scss';

import axios from 'axios';

function App() {
	axios({
		method: 'get',
		url: 'https://api.thecatapi.com/v1/favourites',
		headers: {
			'x-api-key': process.env.REACT_APP_API_KEY,
		},
	}).then(function (response) {
		console.log(response);
	});

	return <div>I'm Alive</div>;
}

export default App;
