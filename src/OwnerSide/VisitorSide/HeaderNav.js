import React, { Component} from 'react'
import styles from './HeaderNav.module.css';
import {NavLink} from 'react-router-dom'

export default class HeaderNav extends Component {
  constructor () {
    super()
    this.state = {
      
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
    
      <header>
      <div className={styles.logo}><span className={styles.detailLogo}>PROPERTYHUB</span><br/></div>
      <nav>
        <NavLink to="/visitor/display-HomePage">Home</NavLink>
        {/* <a href="#1">About us</a> */}
        <NavLink to="">All Property</NavLink>
        <NavLink to="/visitor/display-contactus">Contact us</NavLink>
        <NavLink className={styles.registerBtn} to="/visitor/register-owner">Login & Signup</NavLink>
      </nav>
      </header>


    )
  }
}


