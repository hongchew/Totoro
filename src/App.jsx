import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Films from './components/Films';
import Header from './components/Header';
import PageNav from './components/PageNav';
import SearchBar from './components/SearchBar';

const App = () => {
	const [films, setFilms] = useState([]);
	const [currentFilms, setCurrentFilms] = useState([]);
	const [searchFilms, setSearchFilms] = useState([]);

	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [pageNumArray, setPageNumArray] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [searching, setSearching] = useState(false);
	const { pageNumber } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchFilms = async () => {
			setLoading(true);
			const res = await axios.get('https://ghibliapi.vercel.app/films');
			setFilms(res.data.reverse());
			setCurrentFilms(res.data.reverse());
			setLoading(false);

			let pageNumTemp = [];
			// find total number of page & create array of page numbers to be displayed

			for (let i = 1; i <= Math.ceil(res.data.length / 10); i++) {
				pageNumTemp.push(i);
			}
			setPageNumArray(pageNumTemp);
			if (pageNumTemp.find((page) => page == pageNumber)) {
				setCurrentPage(parseInt(pageNumber));
				console.log(pageNumber);
			} else {
				console.log('Invalid page number params'); //set page number to 1, default to first page
				navigate('/');
			}
		};

		fetchFilms();
	}, [pageNumber]);

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};
	const handleSearch = (e) => {
		e.preventDefault();

		if (searchTerm === '') {
			setCurrentFilms(films);
			setSearching(false);
			return;
		}
		setSearching(true);
		console.log('searching');
		// Search Logic?
		// Split search string by space and check if any title or year contain any of the tokens, if so return true.
		// exclusions is an array of common particles in titles that dont make sense to include.
		// (ie. searching of "Grave of the Fireflies" shouldnt return "Castle in the Sky" because it has the word "The" in common)
		setLoading(true);
		const exclusions = ['THE', 'OF', 'A', 'AN', 'FOR', 'BY', 'IN', 'AND'];
		var searchTokens = searchTerm.split(' ');
		searchTokens = searchTokens.filter(
			(token) => !exclusions.includes(token.toUpperCase())
		); //if token is in exclusion, do not include it in the return array

		searchTokens = searchTokens.map((token) => token.toUpperCase()); //convert search tokens to uppercase

		var filteredFilms = films.filter((film) => {
			var titleTokens = film.title.split(' ');
			// remove exclusions from titleTokens array
			titleTokens = titleTokens.filter(
				(token) => !exclusions.includes(token.toUpperCase())
			); //if token is in exclusion, do not include it in the return array
			titleTokens = titleTokens.map((token) => token.toUpperCase()); //convert title tokens to uppercase -> ignore case sensitivity when searching

			for (var i = 0; i < searchTokens.length; i++) {
				if (titleTokens.includes(searchTokens[i])) {
					//if title has a search token, return true
					return true;
				}
				if (searchTokens[i] == film.release_date) {
					//loose equality to allow comparison between string and number
					return true;
				}
			}

			return false;
		});

		console.log(filteredFilms);

		setSearchFilms(filteredFilms);
		setSearchTerm('');
		setLoading(false);
	};

	//Get films on current page
	const indexLast = currentPage * 10;
	const indexFirst = indexLast - 10;
	const currFilms = currentFilms.slice(indexFirst, indexLast);

	return (
		<>
			<Header />
			<SearchBar
				handleSearchChange={handleSearchChange}
				handleSearch={handleSearch}
				searchTerm={searchTerm}
			/>
			{searching ? ( //conditional rendering of navbar - no navbar when searching
				''
			) : (
				<PageNav pageNumArray={pageNumArray} currentPage={currentPage} />
			)}
			<Films
				films={searching ? searchFilms : currFilms} //display either current page or all search results
				pageNumber={pageNumber}
				loading={loading}
			/>
			{searching ? ( //conditional rendering of navbar - no navbar when searching
				''
			) : (
				<PageNav pageNumArray={pageNumArray} currentPage={currentPage} />
			)}
		</>
	);
};
export default App;
