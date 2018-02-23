import React, { Component } from "react";
import './Service.css'

class Home extends Component {
	render () {
		return (
			<div className='service'>

				<div className='service-img'></div>
				<div className="service-basic">
					<img src={require('./images/service-icon.png')} alt="service-icon" />
					<p>基 础 服 务</p>
				</div>
				<div className="service-custom">
					<img src={require('./images/custom-icon.png')} alt="custom-icon" />
					<div>
						<h2>客户化定制</h2>
						<p>颜色定制</p>
						<p>LOGO定制</p>
					</div>
				</div>
				<div className="service-rent">
					<img src={require('./images/rent-icon.png')} alt="rent-icon" />
					<div>
						<h2>租赁</h2>
						<p>您并不需要拥有一片挡板，只是需要在空位上有一片挡板</p>
						<p>租赁交付，您的明智之选</p>
					</div>
				</div>
				<div className="servie-circle">
					<img src={require('./images/service-circle.gif')} alt="service-circle" />
					<div className='service-circle-right'>
						<div>
							<h2>气流组织</h2>
							<p>使用流量计对地板/送风口进行流量测定，并交付测定报告</p>
						</div>
						<div>
							<h2>巡检</h2>
							<p>现场挡板巡检，完善管理漏洞</p>
						</div>
						<div>
							<h2>优化测评</h2>
							<p>冷电匹配建议，CFD模拟结果，节能运行建议以及全面故障模拟评估</p>
						</div>
					</div>

				</div>
			</div>
		);
	}
}

export default Home;