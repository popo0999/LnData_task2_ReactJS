import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import ScrollToTop from './components/ScrollToTop'
import data from './players.json'

// page
import PlayerList from './pages/PlayerList'

const App = () => {
	return (
		<Router>
			<>
				<Nav />

				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<PlayerList data={data} />
						</Route>
					</Switch>
				</ScrollToTop>
			</>
		</Router>
	)
}

export default App
