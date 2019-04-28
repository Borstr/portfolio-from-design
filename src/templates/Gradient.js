import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

const GradientTemplate = ({ children }) => 
  <ThemeProvider>

  </ThemeProvider>

GradientTemplate.propTypes = {
  children: PropTypes.node.children
}

