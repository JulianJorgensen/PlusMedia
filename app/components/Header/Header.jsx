import React from 'react';
let {connect} = require('react-redux');
import {Link} from 'react-router-dom';
import Headroom from 'react-headroom';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Drawer from 'react-toolbox/lib/drawer';
import styles from './Header.css';

class Header extends React.Component {
  constructor(){
    super();

    this.state = {
      active: false
    };
  }

  handleToggle = () => {
    this.setState({active: !this.state.active});
  };

  render() {
    let {dispatch, pageName, scroll} = this.props;

    return (
      <Headroom>
        <AppBar
          className={styles.bar}
          leftIcon={<img src="/images/logo.png" />}
          rightIcon={<i className={`fa fa-bars ${styles.navIcon}`} />}
          onRightIconClick={this.handleToggle}
         />
        <Drawer
          active={this.state.active}
          onOverlayClick={this.handleToggle}
          type="right"
          theme={styles}
        >
          <nav className={styles.nav}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/capabilities'>Capabilities</Link></li>
            <li><Link to='/clients'>Clients</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </nav>
        </Drawer>
      </Headroom>
    )
  }
}

export default connect(
  (state) => {
    return {
      scroll: state.scrollPosition
    }
  }
)(Header);
