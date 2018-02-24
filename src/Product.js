import React, { Component } from "react";
import './Product.css'

class Product extends Component {
	render () {
		return (
			<div className='pro'>
				<img className='pro-img' src={require(`./images/pro-${this.props.type}.png`)} alt={`pro-${this.props.type}`} />
				<h2>{this.props.title}</h2>
				<p>{this.props.txt}</p>
				{
					this.props.open && <div><img className='pro-open' src={require('./images/pro-open.png')} alt="pro-open" /></div>
				}
			</div>
		);
	}

}

export default Product;