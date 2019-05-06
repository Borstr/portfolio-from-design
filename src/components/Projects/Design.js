import React from 'react'

import styled from 'styled-components'

import Project from './Project'

export default ({ triggerModal }) =>
  <StyledContainer>
    <StyledTitle>Design</StyledTitle>
    <Project triggerModal={triggerModal}/>
    <Project triggerModal={triggerModal}/>
    <Project triggerModal={triggerModal}/>
    <Project triggerModal={triggerModal}/>
  </StyledContainer>

const StyledContainer = styled.section`
  background: ${({ theme }) => theme.colors.darkBlue};
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
`

