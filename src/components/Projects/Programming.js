import React from 'react'

import styled from 'styled-components'

import { Wave375Top, Wave375Bot } from '../../svgs/Waves'

import Project from './Project'

export default ({ triggerModal }) => 
  <StyledSection>
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
  </StyledSection>


const StyledSection = styled.section`
  
`

const StyledWavyContainer = styled.div`
  background: ${({ theme }) => theme.colors.darkBlue};
  padding: 0;
  padding-top: ${({ theme }) => theme.baseDistance * 10}px;
`

const StyledGradientContainer = styled.div`
  background: ${({ theme }) => theme.colors.gradient};
  margin: 0;
  padding-top: ${({ theme }) => theme.baseDistance * 8}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme['375'].fontSizes.big.fontSize};
  line-height: ${({ theme }) => theme['375'].fontSizes.big.lineHeight};
  margin: ${({ theme }) => `${theme.baseDistance * 4}px ${theme.baseDistance * 2}px`};
  text-align: center;
`

const StyledWave375Top = styled(Wave375Top)`
  width: 100%;
  position: relative;
  right: 0;
  margin-bottom: -45px;
  height: 60px;
`

const StyledWave375Bot = styled(Wave375Bot)`
  width: 100%;
  position: relative;
  bottom: 0;
  margin-top: 16px;
  margin-bottom: -16px;
  height: 60px;
`