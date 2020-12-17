import React, {Component} from 'react';


import InfoBox from '../info-box.component';

import data from '../../data/data';

export default class ProjectsPage extends Component {
	
	render () {
		let infoBoxes = [];
		let i = 0;
		for (let project of data.projects) {
			if (project.isHighlight) {
				infoBoxes.push(<InfoBox data={project} key={"InfoBox"+i} />);
				i++;
			}
		}

		return <div style={{
			width: '100%',
			overflow: 'hidden'
		}}>
			{infoBoxes}
		</div>
	}

}