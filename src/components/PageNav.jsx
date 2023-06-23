import React from 'react';

const PageNav = ({ totalFilmsCount, changePage }) => {
	const pageNumbers = [];
	// find total number of page & create array of page numbers to be displayed
	for (let i = 1; i <= Math.ceil(totalFilmsCount / 10); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className='pagination'>
				{pageNumbers.map((num) => (
					<li key={num} className='page-item'>
						<a onClick={()=> changePage(num)} href='!#' className='page-link'>
							{num}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default PageNav;
