import React from 'react'

import styled from 'styled-components'

import AboutItem from './AboutItem'

export default () =>
  <StyledSection>
    <StyledH2>About me</StyledH2>
    <AboutItem />
    <AboutItem />
    <AboutItem />
    <AboutItem />
    <AboutItem />
    <AboutItem />
  </StyledSection>

const StyledSection = styled.section`
  background: ${({ theme }) => theme.colors.darkBlue};
  min-height: 100vh;
  padding: ${({ theme }) => theme.baseDistance * 6}px ${({ theme }) => theme.baseDistance * 2}px;
`

const StyledH2 = styled.h2`
  font-size: ${({ theme }) => theme['375'].fontSizes.medium.fontSize};
  line-height: ${({ theme }) => theme['375'].fontSizes.medium.lineHeight};
  text-shadow: ${({ theme }) => theme['375'].fontSizes.medium.shadow};
  margin: 0;
  text-align: center;
`