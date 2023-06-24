import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
import FilmDetails from '../components/FilmDetails';

const FilmPage = ({}) => {
	const [loading, setLoading] = useState(false);
	const [film, setFilm] = useState({});
	const [people, setPeople] = useState([]);
	const { filmId } = useParams();

	useEffect(() => {
		const fetchFilm = async () => {
			setLoading(true);
			var res = await axios.get('https://ghibliapi.vercel.app/films/' + filmId);
			setFilm(res.data);

			if (res.data.people == 'https://ghibliapi.vercel.app/people/') {
				console.log('no people');
				setPeople(['No information available currently.']);
			} else {
				var peopleResArray = await Promise.all(
					res.data.people.map(async (api) => {
						console.log(api);
						var peopleRes = await axios.get(api);
						return peopleRes.data;
					})
				);

				setPeople(peopleResArray);
			}

			setLoading(false);
		};

		fetchFilm();
	}, []);

	if (loading) {
		return (
			<>
				<Header />
				<Spinner />
			</>
		);
	}

	return (
		<>
			<Header />
			<FilmDetails film={film} people={people} />
		</>
	);
};

export default FilmPage;
