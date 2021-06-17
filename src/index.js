import React from 'react';
import ReactDOM from 'react-dom';
import allReducers from './Redux/Index'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom'

import { GlobalStyle } from './GlobalStyles/GlobalStyles'
// import App from './App';
import MainHeader from './Components/MainHeader/MainHeader'
import MainPage from './Components/MainPage/MainPage'
import MainChekout from './Components/MainCheckout/MainCheckout'
import CheckoutForm from './Components/CheckoutForm/CheckoutForm'
import Error404 from './Components/Error404/Error404'

const store = createStore(
	allReducers,
	composeWithDevTools()
  );

function Index()
{
	return(
		<>
		<Router>
			<MainHeader/>
			<GlobalStyle/>
			<Switch>
				<Route path='/' exact>
					<MainPage/>
				</Route>
				<Route path='/checkout' exact>
					<MainChekout/>
				</Route>
				{
					//Make protected route - only when CheckoutItems.length is not 0
				}
				<Route path='/checkout/form' exact >
					<CheckoutForm/>
				</Route>
				<Route path='*' >
					<Error404/>
				</Route>
			</Switch>
		</Router>
			
		</>
		
	)
}

ReactDOM.render(
	<Provider store={store} >
		<Index/>
	</Provider>
  ,
  document.getElementById('root')
);

