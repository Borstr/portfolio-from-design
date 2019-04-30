import React from 'react'

import styled from 'styled-components'

import Skill from './Skill'

export default () => 
  <StyledSection>
    <StyledTitle>Back-end</StyledTitle>
    <StyledSubcontainer>
      <Skill>
          
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
  background: ${({ theme }) => theme.colors.gradient};
  padding: ${({ theme }) => `${theme.baseDistance * 8}px ${theme.baseDistance * 2}px ${theme.baseDistance * 4}px ${theme.baseDistance * 2}px`};
`

const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme['375'].fontSizes.big.fontSize};
  line-height: ${({ theme }) => theme['375'].fontSizes.big.lineHeight};
  margin: ${({ theme }) => theme.baseDistance * 4}px 0;
  text-align: center;
`