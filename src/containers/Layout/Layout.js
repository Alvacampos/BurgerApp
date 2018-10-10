import React, { Component } from 'react';
import classes from './Layout.css';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

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

  render () {
    const { openSideDrawer, sideDrawerHandler } = this;
    return (
      <Auxiliary>     
        <Toolbar menu = { openSideDrawer } />
        <SideDrawer 
          open = { this.state.showSideDrawer } 
          closed = { sideDrawerHandler }
        />      
        <main className = {classes.Content}>
          {this.props.children}
        </main>
      </Auxiliary>
    );
  } 
}

export default Layout;