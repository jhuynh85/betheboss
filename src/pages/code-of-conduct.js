import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CodeOfConduct from "../components/CodeOfConduct"

const CodeOfConductPage = () => (
  <Layout>
    <SEO title="Code of Conduct" keywords={[`code of conduct`]} />
    <CodeOfConduct />
  </Layout>
)

export default CodeOfConductPage
