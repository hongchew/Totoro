import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='py-16 w-screen mx-auto bg-blend-multiply bg-gray-300 bg-fixed bg-center bg-cover bg-no-repeat bg-[url("https://studioghiblimovies.com/wp-content/uploads/2015/04/umbrella_rain_by_kyendo-d2uwlwi.jpg")]'>
			<Link to="/">
			<h1 className='drop-shadow-xl shadow-black font-extrabold text-7xl text-white text-center'>
				TOTORO
			</h1>
			<h2 className='drop-shadow-xl shadow-black font-bold text-2xl text-white text-center'>
				Unofficial Home of The Ghibli Films
			</h2>
			</Link>
		</div>
		
	);
};

export default Header;
