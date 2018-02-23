import React, { Component } from "react";
import HomeIcon from './HomeIcon'
import HomePro from './HomePro'
import HomePartner from './HomePartner'
import './Home.css'

class Home extends Component {
	render () {
		return (
			<div className='home'>

				<div className='img'></div>
				<div className='icons'>
					<HomeIcon img='arrow' />
					<HomeIcon img='temp'/>
					<HomeIcon img='pue' />
				</div>
				<p className='home-title'>优秀的产品就是持续的价值交付</p>

				<HomePro />
				<HomePartner />
			</div>
		);
	}
}

export default Home;