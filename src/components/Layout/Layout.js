import React, { Component } from 'react';
import classes from './Layout.css';
import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	state = {
		showSideDrawer: false
	}

	sideDrawerHandler = () => {
		this.setState({ showSideDrawer: false });
	}
	openSideDrawer = () => {
		this.setState( prevState => { 
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	}

	render(){
		return (
			<Auxiliary>			
				<Toolbar menu = { this.openSideDrawer } />
				<SideDrawer 
					open = { this.state.showSideDrawer } 
					closed = { this.sideDrawerHandler }
				/>			
				<main className = {classes.Content}>
					{this.props.children}
				</main>
			</Auxiliary>
		);
	}	
}

export default Layout;