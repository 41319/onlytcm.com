import * as React from "react"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

const NotFoundPage = () => (
    <Layout>
        <div className="d-flex flex-column container my-5  justify-content-center align-items-center">

            <img src="/images/diagnosis-1.png" className="img-fluid" />
            <img src="/images/diagnosis-2.jpg" className="img-fluid" />
            <img src="/images/diagnosis-3.jpg" className="img-fluid" />
        </div>

    </Layout>
)

export default NotFoundPage

export const Head = () => (
    <Seo title="404: Not found" />
)
