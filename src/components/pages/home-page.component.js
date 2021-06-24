import React, {Component} from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faUserGraduate, faFolderOpen, faAddressCard, faStar } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default class HomePage extends Component {
	
	render () {
		return <div className="landing-page">
			
			<div className="introduction-text">
				<div className="introduction">
					Master of Science (M.Sc.) graduate in Computer Science, Java and Full-Stack Developer.<br/>
					Highly capable programmer with a wide range of programming and software engineering experiences.<br/>
					Interested in creating enjoyable, informative and transformative experiences for the end user.
				</div>
			</div>

			<div className="education-container">
				<div className="education">
					<div className="box">
						<FontAwesomeIcon
							icon={faGraduationCap}
							style={{margin: '10px auto 20px auto'}}
							size="3x"
						/>
						<div>
							Bachelor of Science<br/>
							Computer Science
						</div>
					</div>
					<div className="box">
						<FontAwesomeIcon
							icon={faUserGraduate}
							style={{margin: '10px auto 20px auto'}}
							size="3x"
						/>
						<div>
							Master of Science<br/>
							Computer Science
						</div>
					</div>
				</div>
			</div>

			<div className="links-container">
				<div className="links">
					<a className="box" href="https://github.com/un0btanium" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon
							icon={faGithub}
							style={{margin: '10px auto 20px auto'}}
							size="3x"
						/>
						<div>
							GitHub
						</div>
					</a>
					<Link to="/homepage/projects" className="box">
						<FontAwesomeIcon
							icon={faFolderOpen}
							style={{margin: '10px auto 20px auto'}}
							size="3x"
						/>
						<div>
							Projects
						</div>
					</Link>
					<Link to="/homepage/highlights" className="box">
						<FontAwesomeIcon
							icon={faStar}
							style={{margin: '10px auto 20px auto'}}
							size="3x"
						/>
						<div>
							Highlights
						</div>
					</Link>
					<Link to="/homepage/contact" className="box">
						<FontAwesomeIcon
							icon={faAddressCard}
							style={{margin: '10px auto 20px auto'}}
							size="3x"
						/>
						<div>
							Contact
						</div>
					</Link>
				</div>
			</div>
		</div>
	}

}