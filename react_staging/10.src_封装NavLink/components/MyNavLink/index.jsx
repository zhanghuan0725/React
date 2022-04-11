import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
      console.log(this.props);
    //   const {to,title,a,b,c} = this.props
    //   const {title} = this.props
    return (
        // <NavLink activeClassName='add' className="list-group-item" to={to}>{title}</NavLink>
        <NavLink activeClassName='add' className="list-group-item" {...this.props}/>


    )
  }
}
