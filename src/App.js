import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import SmallHeader from "./SmallHeader";

class App extends Component {
	constructor () {
		super();
		this.handleWheel = this.handleWheel.bind(this);
	}

	handleWheel (e) {
		let top = document.documentElement.scrollTop || document.body.scrollTop;
		let $smHeader = document.getElementsByClassName("small-header")[0];

		let t = $smHeader.offsetTop;


		if ( top > 168 && t < 0 ) {
			window.requestAnimationFrame(this.handleWheel);
			$smHeader.style.top = t + Math.abs(t / 10) + "px";
		}

		if(top <= 168 ){
			$smHeader.style.top = "-56px";
		}
	}

	render () {
		return (
			<div onWheel={this.handleWheel} className='app'>
	            <SmallHeader />
	            <Header />
	            <Main />
	            <Footer />
            </div>
		);
	}
}

export default App;
