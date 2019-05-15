import React from 'react'

import styled from 'styled-components'

import { Wave375Top, Wave375Bot } from '../../svgs/Waves'

import Project from './Project'

export default ({ triggerModal }) => 
  <section>
    <StyledWavyContainer>
      <StyledTitle>Programming</StyledTitle>
      <StyledWave375Top />
    </StyledWavyContainer>
    <StyledGradientContainer>
      <Project triggerModal={triggerModal}/>
      <Project triggerModal={triggerModal}/>
      <Project triggerModal={triggerModal}/>
      <Project triggerModal={triggerModal}/>
      <StyledWave375Bot />
    </StyledGradientContainer>
  </section>

const StyledWavyContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  padding: 0;
  padding-top: ${({ theme }) => theme.baseDistance * 10}px;
`

const StyledGradientContainer = styled.div`
  background: ${({ theme }) => theme.colors.gradient};
  margin: 0;
  padding-top: ${({ theme }) => theme.baseDistance * 4 + 60}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const StyledTitle = styled.h2`
  text-shadow: ${({ theme }) => theme['375'].fontSizes.medium.shadow};
  margin: ${({ theme }) => `${theme.baseDistance * 4}px ${theme.baseDistance * 2}px`};
  text-align: center;
`

const StyledWave375Top = styled(Wave375Top)`
  width: 100%;
  position: relative;
  margin-bottom: -45px;
  height: 60px;

  @media(min-width: 375px) {
    height: 70px;
    margin-bottom: -50px;
  }
`

const StyledWave375Bot = styled(Wave375Bot)`
  width: 100%;
  position: relative;
  bottom: 0;
  margin-top: ${({ theme }) => theme.baseDistance * 6}px;
  margin-bottom: -${({ theme }) => theme.baseDistance * 2}px;
  height: 60px;

  @media(min-width: 375px) {
    height: 70px;
  }
`