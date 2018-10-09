import React, { Component } from 'react';
import HTML from './HTML/HTML';
import Node from './Node/Node';
import ReactJs from './React/React';
import JavaScript from './JavaScript/JavaScript';

class Skills extends Component {
  render () {
    return (
      <div>
        <HTML />
        <br/>
        <JavaScript />
        <br/>
        <ReactJs />
        <br/>
        <Node />  
      </div>      
    );
  }
}

export default Skills;