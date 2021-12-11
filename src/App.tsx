import React from 'react';
import Router from './Router';
import { GlobalStyle } from './styles';

function App(): JSX.Element {
	return (
		<>
			<GlobalStyle />
			<Router />
		</>
	);
}

export default App;
