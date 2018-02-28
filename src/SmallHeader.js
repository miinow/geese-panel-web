import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./SmallHeader.css";

class SmallHeader extends Component {
	render () {
		return (
			<div className='small-header'>
				<div className='color-bar small-header-bar'></div>
				<div className='small-header-main'>
					<Link to='/'>
						<img className='small-header-logo' src={require("./images/logo.png")} alt="logo" />
					</Link>


					<ul className='small-header-nav'>
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
		);
	}
}

export default SmallHeader;