import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home'
import Service from './Service'
import Products from './Products'
import About from './About'
import Contact from './Contact'

class Header extends Component {
	render () {
		return (
			<div className='main'>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/products' component={Products} />
					<Route path='/service' component={Service} />
					<Route path='/about' component={About} />
					<Route path='/contact' component={Contact} />
				</Switch>
			</div>
		);
	}
}

export default Header;