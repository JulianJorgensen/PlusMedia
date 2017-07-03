import React from 'react';
let {connect} = require('react-redux');
import {Link, withRouter} from 'react-router-dom';
import Headroom from 'react-headroom';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Drawer from 'react-toolbox/lib/drawer';
import DataCardIcon from 'assets/icons/datacardIcon';
import styles from './Header.css';


@withRouter
class Header extends React.Component {
  constructor(){
    super();

    this.state = {
      navStatic: true
    }
  }

  handleNavUnpin() {
    this.setState({
      navStatic: false
    })
  }

  handleNavUnfix() {
    this.setState({
      navStatic: true
    })
  }

  render() {
    let {dispatch, pageName, scroll, navActive, handleNavToggle, history} = this.props;

    return (
      <Headroom
        onUnpin={this.handleNavUnpin.bind(this)}
        onUnfix={this.handleNavUnfix.bind(this)}
        wrapperStyle={{backgroundColor: 'transparent', position: 'absolute', width: '100%'}}
      >
        <AppBar
          className={`${styles.bar} ${this.state.navStatic ? styles.navStatic : ''}`}
          leftIcon={<img src="/images/logo.png" />}
          rightIcon={<i className={`fa fa-bars ${styles.navIcon}`} />}
          onLeftIconClick={() => history.push('/')}
          onRightIconClick={handleNavToggle}
         />
        <Drawer
          active={navActive}
          onOverlayClick={handleNavToggle}
          type="right"
          theme={styles}
        >
          <nav className={styles.nav}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/capabilities'>Capabilities</Link></li>
            <li><Link to='/clients'>Clients</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/data-cards'><DataCardIcon /></Link></li>
          </nav>
        </Drawer>
      </Headroom>
    )
  }
}

export default connect(
  (state) => {
    return {
      modal: state.modal
    }
  }
)(Header);
