import * as React from "react"
import { Link } from "gatsby"
import { Container } from 'react-bootstrap'
import Layout from "../components/layout"
import { Seo } from "../components/seo"

const AboutPage = ({ location }) => {
    const params = new URLSearchParams(location.search);
    const path = params.get("path");

    return (
        <Layout>
            <Container>
            <h2>Redirecting...</h2>
            <meta http-equiv="Refresh" content={`0; url='${path}'`} />
            </Container>
        </Layout>
    )
}

export default AboutPage

export const Head = () => (
    <Seo title="About Gatsby Bootsrap 5 starter" />
)