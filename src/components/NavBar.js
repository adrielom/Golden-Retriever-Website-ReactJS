import { Nav } from '../styles/NavStyle';

import React from 'react';

const NavBar = () => {
	return (
		<Nav>
			<div className='hamburguerIcon'>
				<i className='fas fa-bars' />
			</div>
			<div className='headerLinks'>
				<button type="button" className="link-btn">Start Here</button>
				<button type="button" className="link-btn">About</button>
				<button type="button" className="link-btn">The Golden History</button>
			</div>
			<div className='headerSearch'>
				<input type='text' placeholder='Search' name='search' id='search' />
				<i className='fas fa-search' />
			</div>
		</Nav>
	);
};

export default NavBar;
