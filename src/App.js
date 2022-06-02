import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import ScrollToTop from 'utils/ScrollToTop';

import Home from 'pages/Home';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ShowAllBreeds from 'pages/ShowAllBreeds';
import ShowTopBreeds from 'pages/ShowTopBreeds';
import BreedDetails from 'pages/BreedDetails';

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Header />

			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/all-breeds' element={<ShowAllBreeds />} />
					<Route path='/top-breeds' element={<ShowTopBreeds />} />
					<Route path='/breed/:breedId' element={<BreedDetails />} />
					<Route path='*' element={<Navigate to='/' replace />} />
				</Routes>
			</main>

			<Footer />
		</Router>
	);
}

export default App;
