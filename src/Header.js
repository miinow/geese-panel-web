import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
	render () {
		return (
			<div className='header'>
				<div className='color-bar'></div>
				<div className='header-main'>
					<Link to='/'>
						<img className='logo' src={require("./images/logo.png")} alt="logo" />
					</Link>
					<div className='info'>
						<span className='tel'>Tel: 13811970638</span>
						<ul className='nav'>
							<li>
								<NavLink to="/products" activeClassName='nav-active'  className='nav-tag'>产品</NavLink>
							</li>
							<li>
								 <NavLink to="/service" activeClassName='nav-active'  className='nav-tag'>服务</NavLink>
							</li>
							<li>
								<NavLink to="/about" activeClassName='nav-active'  className='nav-tag'>关于步湃</NavLink>
							</li>
							<li>
								<NavLink to="/contact" activeClassName='nav-active'  className='nav-tag'>联系我们</NavLink>
							</li>
						</ul>
					</div>

				</div>

			</div>
		);
	}
}

export default Header;