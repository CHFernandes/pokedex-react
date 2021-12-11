import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Listing from './pages/Listing';
import Details from './pages/Details';

function Router () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Listing />} />
				<Route path='/details/:id' element={<Details />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;