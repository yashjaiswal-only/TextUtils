import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return ( 
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} `}>
      {/* <nav className="navbar navbar-expand-lg bg-dark"> */}
  <div className="container-fluid text-light">
    {/* <a className="navbar-brand " href="#">{props.tittle}</a> */}
    <Link className="navbar-brand " to="/">{props.tittle}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>       
    {/* this button is for below collapse div when size is decrease */}
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active " aria-current="page" href="#">Home</a> */}
          <Link className="nav-link active " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/about">{props.abouttext}</Link>
        </li>
        
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggle} id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Enable dark mode </label>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes={
        tittle:PropTypes.string,
        abouttext:PropTypes.string
}
Navbar.defaultProps={
    tittle:'set tittle here',
    abouttext:'herer is the about'
}