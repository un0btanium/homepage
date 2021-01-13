import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faReddit, faSteam, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLink, faStar } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";

export default class InfoBox extends Component {
	
	constructor(props) {
		super(); 

		this.state = {
			selectedImage: props.data.images ? props.data.images[0] : undefined
		}

	}

	getIconByName(name) {
		switch(name) {
			case 'github': return faGithub;
			case 'youtube': return faYoutube;
			case 'star': return faStar;
			case 'linkedIn': return faLinkedin;
			case 'steam': return faSteam;
			case 'reddit': return faReddit;
			case 'link': default: return faLink;
		}
	}

	render () {
		// TODO:
		// image
		// images (side-by-side or carousel)
		// video (embedded)

		// TODO put links to the left top-to-bottom?

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

		let className = "info-box fadeIn3s";
		let video = undefined;
		if (this.props.data.video) {
			video = <iframe
				src={"https://www.youtube-nocookie.com/embed/"+this.props.data.video}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				title={this.props.data.title ? this.props.data.title + " Video " : "Video " + 1}
			/>
		}

		let slider = undefined;
		let images = [];
		if (this.props.data.images) {
			let i = 0;
			for (let imageData of this.props.data.images) {
				images.push(
						<img
							// src={"/assets/images/"+imageData}
							className={this.state.selectedImage === imageData ? "selected" : ""}
							src={require("../../public/assets/images/"+imageData)}
							
							key={"InfoImage"+i}
							alt={this.props.data.title ? this.props.data.title + " Image " + i : "Preview Image " + 1}
							onClick={() => { this.setState({ selectedImage: imageData }); }}
						/>
				)
				i++;
			}
			
			if (images.length > 0) {
				className += " has-images";
			}

			var settings = {
				dots: true,
				infinite: false,
				speed: 300,
				slidesToShow: 4,
				slidesToScroll: 1,
				swipeToSlide: true,
				// lazyLoad: 'ondemand',
				responsive: [
					{
						breakpoint: 1750,
						settings: {
							slidesToShow: 1
						}
					},
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 1
						}
					}
				]
			};

			slider = <Slider className="image-slider" {...settings}>{images}</Slider>
		}

		return (
		<>
			<div className={className}>
				<div className="info-box-text-container outer">
					<div className="info-box-text-container inner">
						{ video &&
						<>
							<div className="info-box-viewer-float"></div>
							<div className={"info-box-viewer " + (images.length > 0 && this.props.data.text && this.props.data.text.length < 600 ? "more-space" : "") }>{video}</div>
						</>
						}
						<h1 className="info-box-title">{this.props.data.title}</h1>
						<h3 className="info-box-date">{this.props.data.date}</h3>
						<h5 className="info-box-info">{this.props.data.info}</h5>
						<p className="info-box-text" dangerouslySetInnerHTML={{__html: this.props.data.text}}></p>
						<div className="info-box-links">
							{links}
						</div>
						{images.length > 0 &&
							<>
								<div className="info-box-images-container-relative">
									<div className="info-box-images-container-absolute">
										<div className="image-container">
											{ this.state.selectedImage &&
												<img
													src={require("../../public/assets/images/"+this.state.selectedImage)}
											
													key={this.props.data.title ? this.props.data.title + " Image " : "Large Image"}
													alt={this.props.data.title ? this.props.data.title + " Image " : "Large Image"}
												/>
											}
										</div>
										{
											images.length > 1 &&
											<div className="image-slider-container outer">
												{slider}
											</div>
										}
									</div>
								</div>
							</>
						}
					</div>
				</div>
			</div>
		</>
		)
	}

}