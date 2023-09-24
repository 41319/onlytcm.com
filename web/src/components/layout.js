import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from 'react-bootstrap'
import Navbar from "./navbar"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container-fluid p-0">
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>
        {children}
      </main>

      <footer>
        <Container>
          <h3>Medical Disclaimer</h3>
          All content and media on the OnlyTCM is created and published online for informational purposes only. It is not intended to be a substitute for professional medical advice and should not be relied on as health or personal advice.
          Always seek the guidance of your doctor or other qualified health professional with any questions you may have regarding your health or a medical condition. Never disregard the advice of a medical professional, or delay in seeking it because of something you have read on this Website.
          <h3>Do your own Research</h3>
          Under no circumstances OnlyTCM be held responsible or liable in any way for any claims, damages, losses, expenses, costs or liabilities whatsoever (including, without limitation, any direct or indirect damages for loss of profits, business interruption or loss of information) resulting or arising directly or indirectly from your use of or inability to use this website or any websites linked to it, or from your reliance on the information and material on this website, even if the OnlyTCM has been advised of the possibility of such damages in advance.
        </Container>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
