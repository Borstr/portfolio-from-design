import React from 'react'

import styled from 'styled-components'

import { Wave375Bot, Wave375Top } from '../../../svgs/Waves'

import Contact from './Contact'

export default () => 
  <StyledSection>
    <WavyContainer>
      <StyledH1>
        Borys Strzelewicz
        <br/>
        Front-end Developer
      </StyledH1>
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
  grid-template-rows: 1fr 3fr;
`

const WavyContainer = styled.div`
  background: ${({ theme }) => theme.colors.darkBlue};
  padding: ${({ theme }) => theme.baseDistance * 2}px;
  padding-top: ${({ theme }) => theme.baseDistance * 10}px;
`

const StyledSubcontainer = styled.div`
  background: ${({ theme }) => theme.colors.gradient};
  padding: ${({ theme }) => theme.baseDistance * 10}px ${({ theme }) => theme.baseDistance * 2}px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.baseDistance * 4}px;
  text-align: center;
  margin: 0;

  @media(max-width: 330px) {
    font-size: ${({ theme }) => theme.baseDistance * 3.5}px;
  }
`

const StyledWave375Top = styled(Wave375Top)`
  position: absolute;
  width: 100vw;
  left: 0;
`

const StyledWave375Bot = styled(Wave375Bot)`
  position: absolute;
  width: 100vw;
  bottom: 0;
  left: 0;
`