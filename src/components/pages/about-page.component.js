import React, {Component} from 'react';


export default class AboutPage extends Component {
	
	render () {
		// TODO description text
		// TODO picture?

		return <div style={{ display: "inline-block", width: "100%", height:"100%"}}>
			<div style={{ margin: "auto", width: "600px", backgroundColor: "#4e5d6c", borderRadius: "5px", textAlign: "justify", marginTop: "100px", boxShadow: '2px 2px 5px #000000' }}>
				<div className="fadeIn" style={{margin: "5px", padding: "30px"}}>
					<h2 style={{ textAlign: "center"}}>About Me</h2>
					<br/>
					<p>Hi, I am Marius aka unobtanium.</p>
					</div>
			</div>
		</div>
	}
}