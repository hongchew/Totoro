import React from 'react';
import { Link } from 'react-router-dom';

const PageNav = ({ pageNumArray, currentPage }) => {

	return (
		<nav className='flex justify-center'>
			<ul className='inline-flex py-10 align-middle '>
				{pageNumArray.map((num) => {
					if (num == currentPage) {
						return (
							<li key={num} className='px-4 py-2 border bg-slate-300'>
								<a
									onClick={() => changePage(num)}
									href=''
									className='page-link'
								>
									{num}
								</a>
							</li>
						);
					}

					return (
						<li key={num} className='px-4 py-2 border'>
							<Link to={'/' + num} className='page-link'>
								{num}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default PageNav;
