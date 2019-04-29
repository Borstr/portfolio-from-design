import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

import WavyTemplate from '../templates/WavyTemplate'

import Hero from '../components/Home/Hero/Hero'
import About from '../components/Home/About/About'

const IndexPage = () => 
  <WavyTemplate>
    <Hero />
    <About />
  </WavyTemplate>

export default IndexPage
