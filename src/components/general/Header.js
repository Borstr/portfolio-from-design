import React, { useState } from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

import Hamburger from '../../svgs/Hamburger'
import Logo from '../../svgs/Logo'

export default () => {
  const [ shouldShowNav, triggerNav ] = useState(false);

  return (
    <StyledNav>
      <StyledHeader>
        <StyledLogo />
        <StyledH1>Borys Strzelewicz</StyledH1>
      </StyledHeader>
      <StyledList>

      </StyledList>
      <StyledHamburgerButton>
        <StyledHamburger />
      </StyledHamburgerButton>
    </StyledNav>
  )
}

const StyledList = styled.ul`
  position: fixed;
  left: 0;
  top: 60px;
  height: calc(100vh - 60px);
  width: 80vw;
  padding: ${({ theme }) => `0 ${theme.baseDistance * 2}px ${theme.baseDistance * 15}px ${theme.baseDistance * 2}px`};
  background: ${({ theme }) => theme.colors.gradientNav};
  margin: 0;
  list-style-type: none;
`

const StyledItem = styled.li`

`

const StyledLink = styled(Link)`

`

const StyledNav = styled.nav`
  background: ${({ theme }) => theme.colors.gradient};
  width: 100vw;
  height: 60px;
  padding: 0 8px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, .12), 0 5px 10px rgba(0, 0, 0, .24);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9999999;
`

const StyledHamburger = styled(Hamburger)`
  width: 48px;
  height: 48px;
`

const StyledHamburgerButton = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  padding: 0;
  margin: 0;
  background: transparent;
  outline: none;
`

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
`

const StyledH1 = styled.h1`
  margin: 0;
  font-size: 20px;
`

const StyledLogo = styled(Logo)`
  width: 35px;
  height: 25px;
  margin-right: 8px;
`