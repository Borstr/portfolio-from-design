import React from 'react'

import styled from 'styled-components'

import { Wave375Bot } from '../../svgs/Waves'

import Skill from './Skill'

export default ({ handleSkillClick, skills }) => 
  <StyledSection>
    <StyledWave375Bot />
    <StyledTitle>Learning</StyledTitle>
    <StyledSubcontainer>
      {skills.filter(skill => skill.node.type == 'tools').map(skill => 
        <Skill key={skill.node.title} data={skill.node} handleSkillClick={handleSkillClick}/>
      )}
    </StyledSubcontainer>
  </StyledSection>


const StyledSubcontainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  padding: ${({ theme }) => `0 0 ${theme.baseDistance * 8}px 0`};
`

const StyledTitle = styled.h2`
  text-shadow: ${({ theme }) => theme['375'].fontSizes.medium.shadow};
  margin: ${({ theme }) => theme.baseDistance * 4}px 0;
  text-align: center;
`

const StyledWave375Bot = styled(Wave375Bot)`
  width: 100%;
  height: 60px;
  position: relative;
  margin-top: -43px;

  @media(min-width: 375px) {
    height: 70px;
  }
`