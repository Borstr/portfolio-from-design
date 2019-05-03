import React from 'react'

import styled from 'styled-components'

import Brush from '../../../svgs/Brush'

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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: ${({ theme }) => theme.baseDistance * 4}px 0;
`

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme['375'].fontSizes.body.fontSize};
  line-height: ${({ theme }) => theme['375'].fontSizes.body.lineHeight};
  margin: 0;
`

const StyledTitle = styled.h3`
  font-size: ${({ theme }) => theme['375'].fontSizes.small.fontSize};
  line-height: ${({ theme }) => theme['375'].fontSizes.small.lineHeight};
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
`

const StyledBrush = styled(Brush)`
  width: 60px;
  height: 60px;
`