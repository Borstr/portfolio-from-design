import React from 'react'

import styled from 'styled-components'

import Project from './Project'

export default ({ handleSkillClick, projects }) =>
  <StyledContainer>
    <StyledTitle>Design</StyledTitle>
    {projects.filter(project => project.node.type == 'design').map(project => 
      <Project key={project.node.title} data={project.node} handleSkillClick={handleSkillClick} />  
    )}
  </StyledContainer>

const StyledContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${({ theme }) => theme.baseDistance * 2}px;
  padding-bottom: ${({ theme }) => theme.baseDistance * 8}px;
`

const StyledTitle = styled.h2`
  text-shadow: ${({ theme }) => theme['375'].fontSizes.medium.shadow};
  margin: ${({ theme }) => theme.baseDistance * 4}px 0;
  text-align: center;
  width: 100%;

  @media(max-width: 400px) {
    font-size: ${({ theme }) => theme['375'].fontSizes.big.fontSize};
  }
`

