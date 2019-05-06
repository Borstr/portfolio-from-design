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
  overflow: hidden;
`

const StyledSection = styled.section`
  background: ${({ theme }) => theme.colors.darkBlue};
  padding-top: ${({ theme }) => theme.baseDistance * 4 + 60}px;
`

const StyledTitle = styled.h2`
  text-shadow: ${({ theme }) => theme['375'].fontSizes.medium.shadow};
  margin: ${({ theme }) => theme.baseDistance * 4}px 0;
  text-align: center;
`

const StyledWave375Top = styled(Wave375Top)`
  width: 100%;
  height: 60px;
  position: relative;
  margin-bottom: -20px;
  bottom: -30px;

  @media(min-width: 375px) {
    height: 70px;
  }
`