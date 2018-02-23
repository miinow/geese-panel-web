import React, { Component } from "react";
import './Product.css'

class Product extends Component {
	render () {
		return (
			<div className='product'>
				<div className='product-img'></div>
				<div className="product-title">
					<h2>{this.props.title}</h2>
					<p>{this.props.txt}</p>
				</div>

			</div>
		);
	}

}

export default Product;