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
import ContactPage from './components/pages/contact-page.component';
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
				
				<div className="header-text">
						<div style={{ textAlign: 'center', paddingTop: '75px', paddingBottom: '45px' }}>
							<Nav.Link className="header-text" style={{cursor: 'pointer' }} as={Link} variant="light" to="/homepage/" onClick={ () => { this.setState({ titleText: "WELCOME" }); }}>
								<h2 style={{ fontSize: '3em', fontWeight: '900', fontFamily: "Raleway" }}><span style={{ color: '#0377fc'}}>MARIUS</span> <span style={{ color: '#c9711e'}}>GREBE</span></h2>
							</Nav.Link>
							<p style={{ fontSize: '5em', fontWeight: '100', color: 'white' }}>{this.state.titleText}</p>
						</div>
					
				</div>

				<div className="full-screenable-node hideOnSmallScreens">
					<Navbar className="py-sm-4" bg={BG} variant={VARIANT} expand="sm" style={{ boxShadow: '0px 0px 8px #000000', fontFamily: "Consolas, 'New Courier', Courier, monospace", fontSize: '1.3em'}}>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav style={{ margin: "auto"}}>
								<NavItem className="px-sm-4 text-uppercase text-expanded"><Nav.Link as={Link} variant="light" to="/" onClick={ () => { this.setState({ titleText: "WELCOME" }); }}><b>Home</b></Nav.Link></NavItem>
								<NavItem className="px-sm-4 text-uppercase text-expanded"><Nav.Link as={Link} variant="light" to="/highlights"  onClick={ () => { this.setState({ titleText: "HIGHLIGHTS" }); }}><b>Highlights</b></Nav.Link></NavItem>
								<NavItem className="px-sm-4 text-uppercase text-expanded"><Nav.Link as={Link} variant="light" to="/projects"  onClick={ () => { this.setState({ titleText: "PROJECTS" }); }}><b>All Projects</b></Nav.Link></NavItem>
								<NavItem className="px-sm-4 text-uppercase text-expanded"><Nav.Link as={Link} variant="light" to="/contact"  onClick={ () => { this.setState({ titleText: "CONTACT" }); }}><b>Contact</b></Nav.Link></NavItem>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</div>
				
				<Switch>
					<Route exact
						path="/"
						render={(props) => <HomePage {...props} {...this.state} />}
					/>
					<Route exact
						path="/highlights"
						render={(props) => <HighlightsPage {...props}/>}
					/>
					<Route exact
						path="/projects"
						render={(props) => <ProjectsPage {...props}/>}
					/>
					<Route exact
						path="/contact"
						render={(props) => <ContactPage {...props}/>}
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