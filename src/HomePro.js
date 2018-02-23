import React, { Component } from "react";

import './HomePro.css'

class HomePro extends Component {
	render () {
		return (
			<div className='home-pro'>
				<div className='home-pro-left'>
					<h2>专业之选</h2>
					<p>步湃为您提供完善的末端气流组织方案，有效的<span>消除热点</span>提升数据中心<span>制冷容量</span>。</p>
					<p><span>降低PUE</span>约0.05-0.2</p>
					<button>了 解 更 多</button>
				</div>
				<div className='home-pro-right'>
					<div className='home-pro-stand'>
						<div className='icon-wrapper'>
							<img className='chart-icon' src={require('./images/chart-icon.png')} alt="chart-icon" />
						</div>

						<p>良好的末端气流组织可以使空调达到应有的<span>设计容量</span></p>
					</div>
					<div className='home-pro-stand'>
						<div className='icon-wrapper'>
							<img className='temp-icon' src={require('./images/temp-icon.png')} alt="temp-icon" />
						</div>
						<p>挡板可以有效的消解数据中心<span>设备热点</span></p>
					</div>
					<div className='home-pro-stand'>
						<div className='icon-wrapper'>
							<img className='pue-icon' src={require('./images/pue-icon.png')} alt="pue-icon" />
						</div>
						<p>挡板可以有效的降低数据中心<span>PUE指标</span></p>
					</div>
				</div>
			</div>
		);
	}
}

export default HomePro;