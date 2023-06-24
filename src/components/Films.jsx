import React from 'react';
import FilmCard from './FilmCard';
import Spinner from './Spinner';

const Films = ({ films, loading }) => {

    
	if (loading) {
		return <Spinner />
	}

	return (
		<ul className='flex flex-wrap justify-center'>
			{films.map((film) => (
				<FilmCard key={film.id} film={film} />
			))}
		</ul>
	);
};

export default Films;
