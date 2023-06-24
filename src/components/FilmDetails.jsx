import React from 'react';

const FilmDetails = ({ film, people }) => {
	return (
		<>
			<div className='filmDetails m-10 flex flex-row justify-center border-2 rounded-3xl'>
				<img
					className='max-h-screen rounded-3xl basis-1/3 w-full h-auto'
					src={film.image}
				></img>
				<div className='basis-2/3'>
					<div className='p-8'>
						<h1 className='text-5xl'>{film.title}</h1>
						<p className='m-2'>
							{film.original_title} &#40;
							<span className='italic'>{film.original_title_romanised}</span>
							&#41;
						</p>
					</div>
					<div className='px-8 py-2'>
						<p>
							<span className='font-semibold'>Description:</span>{' '}
							{film.description}
						</p>
					</div>
					<div className='px-8 py-2'>
						<p>
							<span className='font-semibold'>Director:</span> {film.director}
						</p>
					</div>
					<div className='px-8 py-2'>
						<p>
							<span className='font-semibold'>Producer:</span> {film.producer}
						</p>
					</div>
					<div className='px-8 py-2'>
						<p>
							<span className='font-semibold'>Release Year:</span>{' '}
							{film.release_date}
						</p>
					</div>
					<div className='px-8 py-2'>
						<p>
							<span className='font-semibold'>Length:</span> {film.running_time}{' '}
							Minutes
						</p>
					</div>
					<div className='px-8 py-2'>
						<p>
							<span className='font-semibold'>Characters:</span>
							<ul>
								{people.map((person) => (
									<li className='px-4'>{person.name || person}</li>
								))}
							</ul>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default FilmDetails;
