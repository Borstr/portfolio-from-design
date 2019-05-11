import React from 'react'

import styled from 'styled-components'

import Brush from '../../../svgs/Brush'
import Monitor from '../../../svgs/Monitor'

export default () => 
  <StyledContainer>
    <StyledCircle>
      <StyledBrush />
    </StyledCircle>
    <StyledTitle>Web Design</StyledTitle>
    <StyledParagraph>
      In April 2019 I decided, that I want to learn more about other aspects of web development so I started learning about UI and UX designing.
    </StyledParagraph>
  </StyledContainer>

const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  justify-items: center;
  text-align: center;
  margin: ${({ theme }) => theme.baseDistance * 4}px 0;
  width: 400px;
  max-width: 100%;
`

const StyledParagraph = styled.p`
  margin: 0;
  max-width: 100%;
`

const StyledTitle = styled.h3`
  text-shadow: ${({ theme }) => theme['375'].fontSizes.small.shadow};
  margin: ${({ theme }) => theme.baseDistance * 2}px 0;
`

const StyledCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.teal};
  box-shadow: 0 0 7px rgba(0, 0, 0, .12), 0 0 10px rgba(0, 0, 0, .24);
  display: flex;
  justify-content: center;
  align-items: center;

  @media(min-width: 900px) {
    width: 150px;
    height: 150px;
  }
`

const StyledBrush = styled(Brush)`
  width: 60px;
  height: 60px;

  @media(min-width: 900px) {
    width: 100px;
    height: 100px;
  }
`