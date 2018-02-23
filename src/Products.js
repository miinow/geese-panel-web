import React, { Component } from "react";
import Product from './Product'
import './Products.css'

class Products extends Component {
	render () {

		let pro = {
			std:{
				title:'标准挡板',
				txt:'采用阻燃材料，达到B1级阻燃标准。'
			}
		}
		return (
			<div className='products'>
				<div className='products-img'></div>
				<div className="products-title">
					<h2>机柜级别气流组织产品</h2>
					<p>完美适应19英寸机柜的各类挡板去求</p>
				</div>

				<Product title={pro.std.title} txt={pro.std.txt} />

			</div>
		);
	}

}

export default Products;