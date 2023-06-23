import React from 'react';

const FilmCard = ({ film }) => {
	return (
		<div className='hover:brightness-75 w-1/5 border-2 m-4 rounded-3xl cursor-pointer'>
			<div className='relative text-center '>
				<img src={film.image} className='w-full rounded-2xl' />
			</div>
			<div className='flex-col p-4'>
				<h3 className='text-2xl font-bold'>{film.title}</h3>
				<p>
					<span className='font-semibold'>Release Year:</span>{' '}
					{film.release_date}
				</p>
				<p>
					<span className='font-semibold'>Length:</span> {film.running_time}{' '}
					Minutes
				</p>
			</div>
		</div>
	);
};

export default FilmCard;
