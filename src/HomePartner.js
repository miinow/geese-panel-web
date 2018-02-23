import React, { Component } from "react";

import './HomePartner.css'

class HomePartner extends Component {
	render () {
		return (
			<div className='home-partner'>
				<h1>合作伙伴</h1>
				<div className="home-partner-wrapper">
					<img className='partner-img' src={require('./images/partner.png')} alt="partner" />
				</div>
			</div>
		);
	}
}

export default HomePartner;