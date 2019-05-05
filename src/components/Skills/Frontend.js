import React from 'react'

import styled from 'styled-components'

import { Wave375Top } from '../../svgs/Waves'

import Skill from './Skill'

export default ({ triggerModal }) => 
  <StyledSection>
    <StyledTitle>Front-end</StyledTitle>
    <StyledSubcontainer>
      <Skill triggerModal={triggerModal}>

      </Skill>
      <Skill>
        
      </Skill>
      <Skill>
        
      </Skill>
      <Skill>
        
      </Skill>
      <Skill>
        
      </Skill>
      <Skill>
        
      </Skill>
      <Skill>
        
      </Skill>
      <Skill>
        
      </Skill>
      <Skill>
        
      </Skill>
    </StyledSubcontainer>
    <StyledWave375Top />
  </StyledSection>


const StyledSubcontainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const StyledSection = styled.section`
  background: ${({ theme }) => theme.colors.darkBlue};
  padding: ${({ theme }) => `${theme.baseDistance * 10}px ${theme.baseDistance * 2}px 0px ${theme.baseDistance * 2}px`};
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
  margin-bottom: -61px;
`