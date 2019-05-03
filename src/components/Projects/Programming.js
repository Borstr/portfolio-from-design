import React from 'react'

import styled from 'styled-components'

import { Wave375Top } from '../../svgs/Waves'

import Project from './Project'

export default () => 
  <StyledSection>
    <StyledWavyContainer>
      <StyledTitle>Programming</StyledTitle>
      <StyledWave375Top />
    </StyledWavyContainer>
    <StyledGradientContainer>
      <Project />
      <Project />
      <Project />
      <Project />
    </StyledGradientContainer>
  </StyledSection>


const StyledSection = styled.section`
  
`

const StyledWavyContainer = styled.div`
  background: ${({ theme }) => theme.colors.darkBlue};
  padding: ${({ theme }) => `${theme.baseDistance * 10}px ${theme.baseDistance * 2}px 0 ${theme.baseDistance * 2}px`};
`

const StyledGradientContainer = styled.div`
  background: ${({ theme }) => theme.colors.gradient};
  margin: 0;
  border: none;
  padding: ${({ theme }) => `${theme.baseDistance * 8}px ${theme.baseDistance * 2}px ${theme.baseDistance * 4}px ${theme.baseDistance * 2}px`};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme['375'].fontSizes.big.fontSize};
  line-height: ${({ theme }) => theme['375'].fontSizes.big.lineHeight};
  margin: ${({ theme }) => theme.baseDistance * 4}px 0;
  text-align: center;
`

const StyledWave375Top = styled(Wave375Top)`
  width: 100vw;
  position: relative;
  margin-left: -${({ theme }) => theme.baseDistance * 2}px;
  margin-bottom: -50px;
`