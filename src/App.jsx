import { useState, useEffect } from 'react';
import axios from 'axios';
import Films from './components/Films';
import Header from './components/Header';
import PageNav from './components/PageNav';
import { useParams } from 'react-router-dom'

const App = () => {
	const [films, setFilms] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [pageNumArray, setPageNumArray] = useState([])
	const {pageNumber} = useParams();

	useEffect(() => {
		const fetchFilms = async () => {
			setLoading(true);
			const res = await axios.get('https://ghibliapi.vercel.app/films');
			setFilms(res.data.reverse()); //display by latest first
			setLoading(false);

			let pageNumTemp = []
			// find total number of page & create array of page numbers to be displayed

			for (let i = 1; i <= Math.ceil(res.data.length / 10); i++) {
				pageNumTemp.push(i);
			}
			setPageNumArray(pageNumTemp)
			if(pageNumArray.find(pageNumber)){
				setCurrentPage(pageNumber)
			}else{
				setCurrentPage(1)
			}
		};

		fetchFilms();

	}, []); //blank dependency, make useEffect() run only when it runs, prevent loop.


	console.log(films);
	// Get posts on current page
	const indexLast = currentPage * 10;
	const indexFirst = indexLast - 10;
	const currFilms = films.slice(indexFirst, indexLast);

	const changePage = (pageNum) => {
		setCurrentPage(pageNum);
	};

	return (
		<>
			<Header />
			<Films films={films} loading={loading} /> 
			{/* <PageNav pageNumArray={pageNumArray} totalFilmsCount={films.length} changePage={changePage} /> */}
		</>
	);
};
export default App;
