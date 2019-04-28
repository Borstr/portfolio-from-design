import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import PropTypes from 'prop-types'

import 'typeface-roboto'

import theme from '../utils/themes'

import Header from '../components/general/Header'

const GradientTemplate = ({ children }) => 
  <ThemeProvider theme={theme}>
    <>
      <Header />
      <GlobalStyle />
      <StyledMain>
        {children}
      </StyledMain>
    </>
  </ThemeProvider>

const StyledMain = styled.main`
  background: ${({ theme }) => theme.colors.gradient};
  width: 100%;
`

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f0f0f0;
    margin: 0;
  }

  * {
    font-size: ${({ theme }) => theme['375'].fontSizes.body.fontSize};
    font-family: ${({ theme }) => theme.fonts.Roboto};
    box-sizing: border-box;
    color: #fff;
  }

  h1 {
    font-size: ${({ theme }) => theme['375'].fontSizes.H1.fontSize};
    line-height: ${({ theme }) => theme['375'].fontSizes.H1.lineHeight};
  }

  h2 {
    font-size: ${({ theme }) => theme['375'].fontSizes.H2.fontSize};
    line-height: ${({ theme }) => theme['375'].fontSizes.H2.lineHeight};
  }

  h3 {
    font-size: ${({ theme }) => theme['375'].fontSizes.H3.fontSize};
    line-height: ${({ theme }) => theme['375'].fontSizes.H3.lineHeight};
  }
`

export default GradientTemplate

