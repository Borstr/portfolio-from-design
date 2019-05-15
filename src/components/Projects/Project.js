import React from 'react'

import styled from 'styled-components'

export default ({ triggerModal }) => 
  <StyledContainer onClick={() => triggerModal(true)}>

  </StyledContainer>


const StyledContainer = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  width: 150px;
  height: 125px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: ${({ theme }) => theme.baseDistance * 2}px;
  transition: transform 300ms ease-in-out;

  &:hover, &:focus {
    transform: scale(1.2);
  }
`