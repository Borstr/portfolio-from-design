import React from 'react'

import styled from 'styled-components'

import Skill from './Skill'

export default ({ title, triggerModal }) => 
  <StyledSection>
    <StyledTitle>{title}</StyledTitle>
    <StyledSubcontainer>
      <Skill triggerModal={triggerModal}>
          
      </Skill>
      <Skill>
        
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
  font-size: ${({ theme }) => theme['375'].fontSizes.big.fontSize};
  line-height: ${({ theme }) => theme['375'].fontSizes.big.lineHeight};
  margin: ${({ theme }) => theme.baseDistance * 4}px 0;
  text-align: center;
`