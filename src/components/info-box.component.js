import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLink, faStar } from '@fortawesome/free-solid-svg-icons';


export default class InfoBox extends Component {
	
	getIconByName(name) {
		switch(name) {
			case 'github': return faGithub;
			case 'youtube': return faYoutube;
			case 'star': return faStar;
			case 'linkedIn': return faLinkedin;
			case 'link': default: return faLink;
			
		}
	}

	render () {
		// TODO:
		// image
		// images (side-by-side or carousel)
		// video (embedded)
		let links = [];
		if (this.props.data.links) {
			let i = 0;
			for (let linkData of this.props.data.links) {
				links.push(
					<a
						className="iconLink"
						href={linkData.url}
						target="_blank"
						rel="noopener noreferrer"
						key={"IconLink" + i}
					>
						<FontAwesomeIcon
							icon={this.getIconByName(linkData.website)}
							size="2x"
						/>
					</a>)
				i++;
			}
		}

		let className = "info-box";
		let video = undefined;
		if (this.props.data.video) {
			video = <iframe src="https://www.youtube-nocookie.com/embed/7wc2c2ovZ-c" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
		}

		return <div className={className}>
			<div className="info-box-text-container outer">
				<div className="info-box-text-container inner">
					<h1 style={{color: '#0377fc'}}>{this.props.data.title}</h1>
					<h3>{this.props.data.date}</h3>
					<h5>{this.props.data.info}</h5>
					<p className="info-box-text">{this.props.data.text}</p>
    				<div className="website-link-container">
						{links}
					</div>
					{ video &&
					<div className="info-box-content-overlay">
						<div className="info-box-content-container">
							{video}
						</div>
					</div>
					}
				</div>
			</div>
		</div>
	}

}