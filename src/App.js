import React, { Component } from 'react';
import { withRouter, Switch } from 'react-router'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

import Particles from 'react-particles-js';
import particles from './particles';

import "bootstrap/dist/css/bootstrap.min.css";
import "./theme/bootstrap.css";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';

import HomePage from './components/pages/home-page.component';
import HighlightsPage from './components/pages/highlights-page.component';
import ProjectsPage from './components/pages/projects-page.component';
import AboutPage from './components/pages/about-page.component';
// TODO ImpressumPage


const BG = "light"; // primary, dark, light
const VARIANT = "light"; // dark, light

class App extends Component {


  	constructor(props) {
		super()

		this.state = {
			titleText: "WELCOME"
		};

	}

  	render() {

		return (
			<Router>
            	<Particles
					id="particle-background"
					params={particles}
				/>
				
				<div className="hideOnSmallScreens">
					<div style={{ textAlign: 'center', paddingTop: '75px', paddingBottom: '45px' }}>
						<h2 style={{ fontSize: '3em', fontWeight: '900', fontFamily: "Raleway" }}><span style={{ color: '#0377fc'}}>MARIUS</span> <span style={{ color: '#c9711e'}}>GREBE</span></h2>
						<p style={{ fontSize: '5em', fontWeight: '100', color: 'white' }}>{this.state.titleText}</p>
					</div>
				</div>

				<div className="full-screenable-node">
					<Navbar className="py-sm-4" bg={BG} variant={VARIANT} expand="sm" style={{ boxShadow: '0px 0px 8px #000000', fontFamily: "Consolas, 'New Courier', Courier, monospace", fontSize: '1.3em'}}>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav style={{ margin: "auto"}}>
								<NavItem className="px-sm-4 text-uppercase text-expanded"><Nav.Link as={Link} variant="light" to="/homepage/" onClick={ () => { this.setState({ titleText: "WELCOME" }); }}><b>Home</b></Nav.Link></NavItem>
								<NavItem className="px-sm-4 text-uppercase text-expanded"><Nav.Link as={Link} variant="light" to="/homepage/highlights"  onClick={ () => { this.setState({ titleText: "HIGHLIGHTS" }); }}><b>Highlights</b></Nav.Link></NavItem>
								<NavItem className="px-sm-4 text-uppercase text-expanded"><Nav.Link as={Link} variant="light" to="/homepage/projects"  onClick={ () => { this.setState({ titleText: "PROJECTS" }); }}><b>All Projects</b></Nav.Link></NavItem>
								<NavItem className="px-sm-4 text-uppercase text-expanded"><Nav.Link as={Link} variant="light" to="/homepage/about"  onClick={ () => { this.setState({ titleText: "ABOUT ME" }); }}><b>About Me</b></Nav.Link></NavItem>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</div>
				
				<Switch>
					<Route exact
						path="/homepage/"
						render={(props) => <HomePage {...props} {...this.state} />}
					/>
					<Route exact
						path="/homepage/highlights"
						render={(props) => <HighlightsPage {...props}/>}
					/>
					<Route exact
						path="/homepage/projects"
						render={(props) => <ProjectsPage {...props}/>}
					/>
					<Route exact
						path="/homepage/about"
						render={(props) => <AboutPage {...props}/>}
					/>
					<Route render={(props) => <HomePage {...props}
							{...this.state}
						/>}
					/>
				</Switch>
			</Router>
		);
	}

	/* Settings */

	preventEvent(e) {
		e.preventDefault();
	}

	toggleSetting(key) {
		localStorage.setItem(key, !this.state[key]);
		this.setState({
			[key]: !this.state[key]
		});
	}

}

export default withRouter(App);