import React, { Component } from 'react';
import { withRouter, Switch } from 'react-router'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "./theme/bootstrap.css";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';

import HomePage from './components/pages/home-page.component';
import AboutPage from './components/pages/about-page.component';
// TODO ImpressumPage


const BG = "light"; // primary, dark, light
const VARIANT = "light"; // dark, light

class App extends Component {


  	constructor(props) {
		super()

		this.state = {
			// filter: [ "all", "programming projects", "videos"]
			titleText: "WELCOME"
		};

	}

  	render() {

		return (
			<Router>
				<canvas id="particlePlane"></canvas>
				
				<div className="hideOnSmallScreens">
					<div style={{ textAlign: 'center', paddingTop: '90px', paddingBottom: '50px' }}>
						<h2 style={{ fontSize: '2em', fontWeight: '900', color: '#0377fc', fontFamily: "Raleway" }}>MARIUS GREBE</h2>
						<p style={{ fontSize: '4.5em', fontWeight: '100', color: 'white' }}>{this.state.titleText}</p>
					</div>
				</div>

				<div className="full-screenable-node">
					<Navbar className="py-sm-4" bg={BG} variant={VARIANT} expand="sm" style={{ boxShadow: '0px 0px 8px #000000', fontFamily: "Consolas, 'New Courier', Courier, monospace", fontSize: '1.3em'}}>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav style={{ margin: "auto"}}>
								<NavItem className="px-sm-4 text-uppercase text-expanded"><Nav.Link as={Link} variant="light" to="/homepage/" onClick={ () => { this.setState({ titleText: "WELCOME" }); }}><b>Home</b></Nav.Link></NavItem>
								<NavItem className="px-sm-4 text-uppercase text-expanded"><Nav.Link as={Link} variant="light" to="/homepage/about"  onClick={ () => { this.setState({ titleText: "ABOUT ME" }); }}><b>About Me</b></Nav.Link></NavItem>
							</Nav>
						</Navbar.Collapse>
					</Navbar>

					<Switch>
						<Route exact
							path="/homepage/"
							render={(props) => <HomePage {...props} {...this.state} />}
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
				</div>
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