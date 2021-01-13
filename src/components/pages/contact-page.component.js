import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faXing } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default class ContactPage extends Component {
	
	render () {
		return (<div className="contact-list">
			<div className="links">

				<a href="mailto:mariusgrebe@googlemail.com" target="_blank" rel="noopener noreferrer">
					<div className="link">
						<div className="icon-box">
							<FontAwesomeIcon
								icon={faEnvelope}
								color="black"
								size="3x"
							/>
						</div>
						<div className="text">mariusgrebe@gmail.com</div>
					</div>
				</a>

				<a href="https://www.xing.com/profile/Marius_Grebe2/cv" target="_blank" rel="noopener noreferrer">
					<div className="link">
						<div className="icon-box">
							<FontAwesomeIcon
								icon={faXing}
								color="black"
								size="3x"
							/>
						</div>
						<div className="text">xing.com/profile/Marius_Grebe2/cv</div>
					</div>
				</a>

				<a href="https://www.linkedin.com/in/marius-grebe-1a057a1b8/" target="_blank" rel="noopener noreferrer">
					<div className="link">
						<div className="icon-box">
							<FontAwesomeIcon
								icon={faLinkedin}
								color="black"
								size="3x"
							/>
						</div>
						<div className="text">linkedin.com/in/marius-grebe-1a057a1b8/</div>
					</div>
				</a>

			</div>
		</div>)
	}
}