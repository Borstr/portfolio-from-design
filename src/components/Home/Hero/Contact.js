import React from 'react'

import styled from 'styled-components'

export default () => 
  <StyledDiv>
    <StyledH2>Contact</StyledH2>
    <StyledParagraph>
      frontend@borysstrzelewicz.pl
      <br/>
      +48 664 916 712
      <br/>
      github
      <br/>
      linkedIn
    </StyledParagraph>
  </StyledDiv>

const StyledDiv = styled.div`

`

const StyledH2 = styled.h2`
  font-size: ${({ theme }) => theme['375'].fontSizes.H3.fontSize};
  line-height: ${({ theme }) => theme['375'].fontSizes.H3.lineHeight};
  margin: 0 ${({ theme }) => theme.baseDistance}px;
`

const StyledParagraph = styled.p`
  margin: 0 ${({ theme }) => theme.baseDistance}px;
`