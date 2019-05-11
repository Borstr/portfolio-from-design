import React from 'react'

import styled from 'styled-components'

import AboutItem from './AboutItem'

export default () =>
  <StyledSection>
    <StyledH2>About me</StyledH2>
    <StyledContainer>
      <AboutItem />
      <AboutItem />
      <AboutItem />
      <AboutItem />
      <AboutItem />
      <AboutItem />
    </StyledContainer>
  </StyledSection>

const StyledSection = styled.section`
  background: ${({ theme }) => theme.colors.darkBlue};
  padding: ${({ theme }) => theme.baseDistance * 6}px ${({ theme }) => theme.baseDistance * 2}px;

  @media(min-width: 375px) {
    padding: ${({ theme }) => theme.baseDistance * 4}px;
  }
`

const StyledContainer = styled.div`
  display: grid;
  margin: 0 auto;
  justify-items: center;
  grid-template-columns: 100%;

  @media(min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(min-width: 1366px) {
    max-width: 1366px;
    grid-template-columns: repeat(3, 1fr);
  }
`

const StyledH2 = styled.h2`
  text-shadow: ${({ theme }) => theme['375'].fontSizes.medium.shadow};
  margin: 0;
  text-align: center;

  @media(max-width: 374px) {
    font-size: ${({ theme }) => theme['375'].fontSizes.medium.fontSize};
    line-height: ${({ theme }) => theme['375'].fontSizes.medium.lineHeight};
  }

  @media(min-width: 375px) {
    margin-bottom: 64px;
  }
`