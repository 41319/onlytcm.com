import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useLocation } from '@reach/router';
const { useEffect, useState } = React;

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : { className: "nav-link" }
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const spSubmenu = [
  {
    to: '/',
    label: 'Flu, Fever 感冒 发烧 '
  }
]

const Navbar = ({ siteTitle }) => {
  const location = useLocation();
  const [isSPActive, setIsSPActive] = useState(false)
  useEffect(() => {
    const _isActive = !!spSubmenu.find(e => location.pathname.includes(e?.to))
    setIsSPActive(_isActive)
  }, [location.pathname])

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

            <li class="nav-item dropdown" id="myDropdown">
              <a class={`nav-link dropdown-toggle ${isSPActive ? 'active' : ''}`} href="#" data-bs-toggle="dropdown">  Specific Treatment 专治  </a>
              <ul class="dropdown-menu">
                {
                  spSubmenu?.map(sm => <li> <Link className="dropdown-item" to={sm?.to}> { sm.label } </Link></li>)
                }
              </ul>
            </li>
            <li className="nav-item">
              <ExactNavLink
                to="/"
              >
                Search 搜索
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
