import React from 'react';

const SearchBar = ({ handleSearchChange, handleSearch, searchTerm }) => {
	return (
		<form className='searchBar m-auto mt-4 w-1/2 max-w-2xl justify-center'>
			<label
				htmlFor='default-search'
				className='mb-2 text-sm font-medium text-gray-900 sr-only'
			>
				Search
			</label>
			<div className='relative'>
				<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
					<svg
						aria-hidden='true'
						className='w-5 h-5 text-gray-500'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
						></path>
					</svg>
				</div>
				<input
					type='search'
					className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-rose-200 focus:border-rose-200'
					placeholder='Search Title or Year'
					onChange={handleSearchChange}
					value={searchTerm}
					required
				/>

				<button
					type='submit'
					onClick={handleSearch}
					className='text-white absolute right-2.5 bottom-2.5 bg-rose-500 hover:bg-rose-300 focus:ring-4 focus:outline-none focus:ring-rose-200 font-medium rounded-lg text-sm px-4 py-2'
				>
					Search
				</button>
			</div>
		</form>
	);
};

export default SearchBar;
