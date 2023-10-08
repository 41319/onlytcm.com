import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useLocation } from '@reach/router';
import Table from 'react-bootstrap/Table';



const { useEffect, useState } = React;

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : { className: "nav-link" }
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const spSubmenu = [
  {
    to: '/flu',
    label: 'Flu, Fever 感冒 发烧 '
  }
]

const dSubmenu = [
  {
    to: '/diagnosis',
    label: 'Diagnosis 诊断'
  }
]

const Submenu = ({ menu, active, menuName }) => <li class="nav-item dropdown" id="myDropdown">
  <a class={`nav-link dropdown-toggle ${active ? 'active' : ''}`} href="#" data-bs-toggle="dropdown">  { menuName }  </a>
  <ul class="dropdown-menu">
    {
      menu?.map(sm => <li> <Link className="dropdown-item" to={sm?.to}> {sm.label} </Link></li>)
    }
  </ul>
</li>

const isMenuActive = (path, menu) => {
  return !!menu.find(e => path.includes(e?.to));
} 

const Navbar = ({ siteTitle }) => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">{siteTitle}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar"
          aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">

            <Submenu
              menuName="Diagnosis 诊所"
              menu={dSubmenu}
              active={isMenuActive(location.pathname, dSubmenu)}
            />
            <Submenu
              menuName="Specific Treatment 专治"
              menu={spSubmenu}
              active={isMenuActive(location.pathname, spSubmenu)}
            />
            <li className="nav-item">
              <ExactNavLink
                to="/"
              >
                Pharmacy 药房
              </ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink
                to="/redirect?path=https%3A%2F%2Fgithub.com%2F41319%2Fonlytcm.com"
              >
                github
              </ExactNavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
