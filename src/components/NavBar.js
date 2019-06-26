import { Nav } from '../styles/NavStyle';

import React from 'react';

const NavBar = () => {
	return (
		<Nav>
			<div className='hamburguerIcon'>
				<i className='fas fa-bars' />
			</div>
			<div className='headerLinks'>
				<a href='#'>Start Here</a>
				<a href='#'>About</a>
				<a href='#'>The Golden History</a>
			</div>
			<div className='headerSearch'>
				<input type='text' placeholder='Search' name='search' id='search' />
				<i className='fas fa-search' />
			</div>
		</Nav>
	);
};

export default NavBar;
