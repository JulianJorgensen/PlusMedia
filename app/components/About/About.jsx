import React from 'react';
import Marquee from '../Marquee/Marquee';

class About extends React.Component{
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <Marquee title="About" />
        <p>About page</p>
      </div>
    )
  }
}

module.exports = About;
