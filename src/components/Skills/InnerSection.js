import React from 'react'
import { StaticQuery } from 'gatsby'

import styled from 'styled-components'

import Skill from './Skill'

export default ({ title, handleSkillClick, skills, type }) =>
  <StyledSection>
    <StyledTitle>{title}</StyledTitle>
    <StyledSubcontainer>
      {skills.filter(skill => skill.node.type == type).map(skill => 
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
  margin: 0;
  border: none;
  padding: ${({ theme }) => `${theme.baseDistance * 4}px ${theme.baseDistance * 2}px 0 ${theme.baseDistance * 2}px`};

  &:first-child {
    padding: ${({ theme }) => `${theme.baseDistance * 8}px ${theme.baseDistance * 2}px 0 ${theme.baseDistance * 2}px`};
  }

  &:last-child {
    padding: ${({ theme }) => `${theme.baseDistance * 4}px ${theme.baseDistance * 2}px ${theme.baseDistance * 10}px ${theme.baseDistance * 2}px`};
  }
`

const StyledTitle = styled.h2`
  text-shadow: ${({ theme }) => theme['375'].fontSizes.medium.shadow};
  margin: ${({ theme }) => theme.baseDistance * 4}px 0;
  text-align: center;
`