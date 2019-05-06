import React from 'react'

import styled from 'styled-components'

import { Wave375Bot } from '../../svgs/Waves'

import Skill from './Skill'

export default ({ triggerModal }) => 
  <StyledSection>
    <StyledWave375Bot />
    <StyledTitle>Learning</StyledTitle>
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
  padding: ${({ theme }) => `0 0 ${theme.baseDistance * 8}px 0`};
`

const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme['375'].fontSizes.big.fontSize};
  line-height: ${({ theme }) => theme['375'].fontSizes.big.lineHeight};
  margin: ${({ theme }) => theme.baseDistance * 4}px 0;
  text-align: center;
`

const StyledWave375Bot = styled(Wave375Bot)`
  width: 100%;
  height: 60px;
  position: relative;
  margin-top: -37px;
`