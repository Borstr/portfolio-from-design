import React from 'react'

import styled from 'styled-components'

import { Wave375Bot } from '../../svgs/Waves'

import Skill from './Skill'

export default ({ triggerModal }) => 
  <StyledSection>
    <StyledWave375Bot />
    <StyledTitle>Front-end</StyledTitle>
    <StyledSubcontainer>
      <Skill triggerModal={triggerModal}>

      </Skill>
      <Skill>
        
      </Skill>
      <Skill>
        
      </Skill>
    </StyledSubcontainer>
  </StyledSection>


const StyledSubcontainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const StyledSection = styled.section`
  background: ${({ theme }) => theme.colors.darkBlue};
  padding: ${({ theme }) => `${theme.baseDistance * 2}px ${theme.baseDistance * 2}px ${theme.baseDistance * 8}px ${theme.baseDistance * 2}px`};
`

const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme['375'].fontSizes.big.fontSize};
  line-height: ${({ theme }) => theme['375'].fontSizes.big.lineHeight};
  margin: ${({ theme }) => theme.baseDistance * 4}px 0;
  text-align: center;
`

const StyledWave375Bot = styled(Wave375Bot)`
  width: 100vw;
  position: absolute;
  margin-left: -${({ theme }) => theme.baseDistance * 2}px;
  margin-top: -65px;
`