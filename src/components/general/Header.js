import React, { useState } from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

import Hamburger from '../../svgs/Hamburger'
import Logo from '../../svgs/Logo'

export default () => {
  const [ shouldShowNav, triggerNav ] = useState(null);

  return (
    <>
      <StyledNav>
        <StyledHeader>
          <StyledLogo />
          <StyledH1>Borys Strzelewicz</StyledH1>
        </StyledHeader>
        <StyledList shouldShow={shouldShowNav}>
          <StyledItem>
            <StyledLink onClick={() => triggerNav(false)} to='/'>home</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink onClick={() => triggerNav(false)} to='/#about'>about</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink onClick={() => triggerNav(false)} to='/skills'>skills</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink onClick={() => triggerNav(false)} to='/projects'>projects</StyledLink>
          </StyledItem>
        </StyledList>
        <StyledHamburgerButton onClick={() => triggerNav(!shouldShowNav)}>
          <StyledHamburger />
        </StyledHamburgerButton>
      </StyledNav>
      <StyledOverlay shouldShow={shouldShowNav} onClick={() => triggerNav(false)} />
    </>
  )
}

const StyledItem = styled.li`
  display: block;
  border-top: 2px dashed ${({ theme }) => theme.colors.white};
  height: calc((100vh - 124px) / 4);
  line-height: calc((100vh - 124px) / 4);

  @media(max-width: 374px) {
    &:last-child {
      border-bottom: 2px dashed ${({ theme }) => theme.colors.white};
    }
  }

  @media(min-width: 1366px) {
    height: 60px;
    line-height: 60px;
    border: none;
  }
`

const StyledLink = styled(Link)`
  display: block;
  line-height: calc((100vh - 124px) / 4);
  height: calc((100vh - 124px) / 4);
  text-decoration: none;
  text-transform: lowercase;
  font-size: ${({ theme }) => theme['375'].fontSizes.small.fontSize};

  @media(min-width: 1366px) {
    height: 60px;
    line-height: 60px;
    padding: 0 ${({ theme }) => theme.baseDistance}px;
    transition: 300ms ease-in-out;

    &:hover, &:focus {
      background: rgba(0, 0, 0, .24);
    }
  }
`

const StyledOverlay = styled.button`
  position: fixed;
  display: ${({ shouldShow }) => shouldShow === null ? 'none' : 'block'};
  left: 0;
  top: 60px;
  width: 100vw;
  height: calc(100vh - 60px);
  background: rgba(0, 0, 0, .4);
  border: none;
  padding: 0;
  margin: 0;
  outline: none;
  animation: 500ms ${({ shouldShow }) => shouldShow ? 'showOverlay' : shouldShow === null ? '' : 'hideOverlay'} ease-out;
  animation-fill-mode: forwards;
  z-index: 99999;

  @keyframes showOverlay {
    from { left: -100vw }
    to { left: 0 }
  }

  @keyframes hideOverlay {
    from { left: 0 }
    to { left: -100vw }
  }

  @media(min-width: 1366px) {
    display: none;
  }
`

const StyledList = styled.ul`
  position: fixed;
  left: 0;
  top: 60px;
  height: calc(100vh - 60px);
  width: 80vw;
  display: ${({ shouldShow }) => shouldShow === null ? 'none' : 'block'};
  padding: ${({ theme }) => `0 ${theme.baseDistance * 2}px ${theme.baseDistance * 8}px ${theme.baseDistance * 2}px`};
  background: ${({ theme }) => theme.colors.gradientNav};
  margin: 0;
  list-style-type: none;
  z-index: 99999999;
  animation: 500ms ${({ shouldShow }) => shouldShow ? 'showNav' : shouldShow === null ? '' : 'hideNav'} ease-out;
  animation-fill-mode: forwards;

  @keyframes showNav {
    0% { left: -80vw }
    100% { left: 0 }
  }

  @keyframes hideNav {
    from { left: 0 }
    to { left: -80vw }
  }

  @media(min-width: 1366px) {
    display: block;
    position: static;
    background: transparent;
    padding: 0;
    display: flex;
    width: auto;
    height: auto;
  }
`

const StyledNav = styled.nav`
  background: ${({ theme }) => theme.colors.gradient};
  width: 100vw;
  height: 60px;
  padding: 0 ${({ theme }) => theme.baseDistance}px;
  padding-right: ${({ theme }) => theme.baseDistance * 2}px;
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

  @media(min-width: 1366px) {
    display: none;
  }
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