import React, { Component } from "react";
import './HomeIcon.css'

class HomeIcon extends Component {


	render () {
		return (
			<div>
				<div className='home-icon'>
					<div className='home-icon-bg'>
						<img src={require(`./images/${this.props.img}.png`)} alt={this.props.img} />
					</div>
					<div className='line'></div>

				</div>
				<div className="shadow"></div>
			</div>
		);
	}
}

export default HomeIcon;