import React, { Component } from "react";
import './Contact.css'

class Contact extends Component {


	render () {
		return (
			<div className='contact'>
				<div className="img-frame"></div>
				<img className='contact-img' src={require('./images/contact.gif')} alt="contact" />

				<div className="contact-bottom">
					<div className="contact-slogan">
						<p>我们一直在这里,乐于倾听和讨论我们的产品,服务,企业或合作伙伴。让我们知道你在想什么!
</p>
					</div>
					<div className='contact-content'>
						<span>北京市西城区广安门内大街319号</span>
						<span>13811970638</span>
						<a href="Mailto:service@blankpanel.com">service@blankpanel.com</a>

					</div>
					<div className='map-img-wrapper'>
						<div className="map-img"></div>
					</div>

				</div>

			</div>
		);
	}

}

export default Contact;