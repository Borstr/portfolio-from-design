import React from 'react'

import styled from 'styled-components'

import { Wave375Bot, Wave375Top } from '../../../svgs/Waves'

import Contact from './Contact'

export default () => 
  <StyledSection>
    <WavyContainer>
      <StyledTitle>
        Borys Strzelewicz
        <br/>
        Front-end Developer
      </StyledTitle>
      <StyledWave375Top/>
      <StyledWave375Bot />
    </WavyContainer>
    <StyledSubcontainer>
      <Contact />
      <div></div>
    </StyledSubcontainer>
  </StyledSection>

const StyledSection = styled.section`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`

const WavyContainer = styled.div`
  background: ${({ theme }) => theme.colors.darkBlue};
  padding: ${({ theme }) => theme.baseDistance * 2}px;
  padding-top: ${({ theme }) => theme.baseDistance * 10}px;

  @media(min-width: 1366px) {
    padding-top: ${({ theme }) => theme.baseDistance * 8 + 60}px;
  }
`

const StyledSubcontainer = styled.div`
  background: ${({ theme }) => theme.colors.gradient};
  padding: ${({ theme }) => theme.baseDistance * 10}px ${({ theme }) => theme.baseDistance * 2}px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media(min-width: 1366px) {
    padding: ${({ theme }) => theme.baseDistance * 4}px;
  }
`

const StyledTitle = styled.h2`
  text-align: center;
  margin: 0;
  width: 100%;

  @media(max-width: 1365px) {
    font-size: ${({ theme }) => theme.baseDistance * 4}px;
    line-height: ${({ theme }) => theme.baseDistance * 5}px;
  }

  @media(max-width: 330px) {
    font-size: ${({ theme }) => theme.baseDistance * 3.5}px;
  }
`

const StyledWave375Top = styled(Wave375Top)`
  position: absolute;
  width: 100%;
  top: 160px;
  left: 0;
  height: 60px;

  @media(min-width: 1366px) {
    height: 80px;
    top: 275px;
  }
`

const StyledWave375Bot = styled(Wave375Bot)`
  position: absolute;
  width: 100%;
  height: 60px;
  bottom: -1px;
  left: 0;

  @media(min-width: 1366px) {
    height: 80px;
  }
`