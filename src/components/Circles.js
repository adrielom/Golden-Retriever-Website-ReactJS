import React from 'react';
import { Circle } from '../styles/CircleStyle';

function Circles() {
	return (
		<div>
			<Circle top='35' left='-100' radius='300' />
			<Circle bottom='-30' right='-525' radius='300' />
			<Circle bottom='-450' left='350' radius='300' />
		</div>
	);
}

export default Circles;
