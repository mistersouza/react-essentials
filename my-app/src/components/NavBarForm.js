import React, { Component } from 'react'
import NavBarChild from './NavBarChild'
import css from './css/NavBarForm.module.css'

export class NavBarForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isLoggedIn: true
    }
  }

  handleLoginClick = () => {
    this.setState({
      isLoggedIn: this.state.isLoggedIn ? false : true
    }, () => console.log(this.state.isLoggedIn))
  }

  render() {
    return (
      <div className={css.navBar}>
        <h1>My Gallery</h1>
        <NavBarChild 
          isLoggedIn={this.state.isLoggedIn}
          handleLoginClick={this.handleLoginClick}
        />
      </div>
    )
  }
}

export default NavBarForm