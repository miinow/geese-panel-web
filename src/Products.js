import React, { Component } from "react";
import Product from "./Product";
import "./Products.css";

class Products extends Component {
	render () {

		let pro = [{
				key:"std",
				open:true,
				title: "标准挡板",
				txt: "采用阻燃材料，达到B1级阻燃标准。"
			},{
				key:"line",
				open:false,
				title: "理线挡板",
				txt: "适应设备前部走线需求，无创施工"
			},{
				key:"temp",
				open:false,
				title: "温显挡板",
				txt: "增加温度显示模块，各U位温度一目了然"
			},{
				key:"corr",
				open:false,
				title: "腐蚀度挡板",
				txt: "增加腐蚀度检测模块，以月为单位反馈腐蚀度测试结果"
			}];
		return (
			<div className='products'>
				<div className='img-frame'></div>
				<img className='products-img' src={require('./images/products.gif')} alt="products" />
				<div className="products-title">
					<img className='products-icon' src={require("./images/products-icon.png")} alt="products-icon" />
					<h2>机柜级别气流组织产品</h2>
					<p>完美适应19英寸机柜的各类挡板需求</p>
				</div>

				{
					pro.map(item=>{
						return <Product
							title={item.title}
							txt={item.txt}
							key={item.key}
							type={item.key}
							open={item.open}
						/>

					})
				}

			</div>
		);
	}

}

export default Products;