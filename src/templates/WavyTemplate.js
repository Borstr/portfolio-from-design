import React from 'react'

import styled, { ThemeProvider } from 'styled-components'

import theme from '../utils/themes'
import GlobalStyle from '../utils/GlobalStyle'

import Header from '../components/general/Header'

export default ({ children }) => 
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
  /* background: ${({ theme }) => theme.colors.darkBlue}; */
  width: 100vw;
`