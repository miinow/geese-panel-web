import React, { Component } from "react";
import './About.css'

class About extends Component {
	render () {
		return (
			<div className='about'>
				<img className='about-img' src={require('./images/about.gif')} alt="about" />
				<div className="about-us">
					<h2>关于我们</h2>
					<p>步湃科技始建于2016年，合伙人具有资深数据中心行业背景。多年的实际工作感到数据中心气流组织存在巨大的空白，
有感于无谓的制冷消耗和供应链的孱弱，故创办本公司，希望能为数据中心行业提供一个选项。</p>
				</div>
				<div className="about-com">
					<h2>选择步湃</h2>
					<p>步湃科技末端气流管理解决方案，以优化数据中心制冷为己任。通过我们的服务为数据中心实现： </p>
					<ul>
						<li>规划组织气流，降低制冷成本</li>
						<li> 消除 IT 热点，提高IT可靠性 </li>
						<li>规划制冷策略，用足制冷容量</li>
						<li>降低PUE数值，合规绿色交付</li>
					</ul>
					<p>我们提供一流的产品，结合数据中心制冷专家的咨询落地，为数据中心经理提供最专业的制冷建议和落地工具。</p>
				</div>
			</div>
		);
	}

}

export default About;