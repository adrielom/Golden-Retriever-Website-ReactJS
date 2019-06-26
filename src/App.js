import React from 'react';
import { Main } from './styles/NavStyle';
import { NavBar, Circles, Content } from './components';
import WebfontLoader from '@dr-kobros/react-webfont-loader';

const config = {
	custom: {
		families: [ 'hobbit' ],
		urls: [ './index.css' ],
	},
};

function App() {
	return (
		<WebfontLoader config={config}>
			<Main>
				<NavBar />
				<Circles />
				<Content />
			</Main>
		</WebfontLoader>
	);
}

export default App;
