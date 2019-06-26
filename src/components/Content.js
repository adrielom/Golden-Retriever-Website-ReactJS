import React from 'react';
import { Gallery, TextComp } from '../components';
import { ContentStyle } from '../styles/ContentStyle';

const Content = () => {
	return (
		<ContentStyle>
			<TextComp />
			<Gallery />
		</ContentStyle>
	);
};

export default Content;
