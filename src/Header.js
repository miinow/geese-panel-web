import React, { Component } from "react";
import { Link } from "react-router-dom";
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
								<Link to="/products" style={{ color: "#909090",textDecoration: "none" }}>产品</Link>
							</li>
							<li>
								 <Link to="/service" style={{ color: "#909090",textDecoration: "none" }}>服务</Link>
							</li>
							<li>
								<Link to="/about" style={{ color: "#909090",textDecoration: "none" }}>关于步湃</Link>
							</li>
							<li>
								<Link to="/contact" style={{ color: "#909090",textDecoration: "none" }}>联系我们</Link>
							</li>
						</ul>
					</div>

				</div>

			</div>
		);
	}
}

export default Header;