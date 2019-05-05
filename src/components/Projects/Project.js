import React from 'react'

import styled from 'styled-components'

export default ({ triggerModal }) => 
  <StyledContainer onClick={() => triggerModal(true)}>

  </StyledContainer>


const StyledContainer = styled.button`
  background: ${({ theme }) => theme.colors.white};
  width: 150px;
  height: 125px;
  border: none;
  outline: none;
  margin: ${({ theme }) => theme.baseDistance * 2}px;

  &:nth-of-type(2n - 1) {
    margin-left: 0;
  }

  &:nth-of-type(2n) {
    margin-right: 0;
  }
`