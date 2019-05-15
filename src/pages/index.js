import React from "react"
// import { Link } from "gatsby"
// import SEO from "../components/seo"

import MainTemplate from '../templates/MainTemplate'

import Hero from '../components/Home/Hero/Hero'
import About from '../components/Home/About/About'

const IndexPage = () => 
  <MainTemplate>
    <Hero />
    <About />
  </MainTemplate>

export default IndexPage
