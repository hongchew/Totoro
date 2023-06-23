import { useState, useEffect } from 'react';
import axios from 'axios';
import Films from './components/Films';
import Header from './components/Header';

const App = () => {
	const [films, setFilms] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		const fetchFilms = async () => {
			setLoading(true);
			const res = await axios.get('https://ghibliapi.vercel.app/films');
			setFilms(res.data);
      setLoading(false);
		};

		fetchFilms();
	}, []); //blank dependency, make useEffect() run only when it runs, prevent loop.

  console.log(films);

	return (
		<>
			<Header/>
			<Films films={films} loading={loading}/>
		</>
	);
};
export default App;
