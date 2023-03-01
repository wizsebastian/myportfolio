import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HomePage from "../Scenes/Home"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePage />
  </Layout>
)

export default IndexPage
