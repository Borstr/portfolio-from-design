import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import 'typeface-roboto'

import theme from '../utils/themes'
import GlobalStyle from '../utils/GlobalStyle'

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
  width: 100vw;
`

export default GradientTemplate
