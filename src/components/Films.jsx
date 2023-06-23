import React from 'react';

const Films = ({ films, loading }) => {
	if (loading) {
		return <h2> Loading Films...</h2>;
	}

	return (
		<ul>
			{films.map((film) => (
				<li key={film.id}>{film.title}</li>
			))}
		</ul>
	);
};

export default Films;
