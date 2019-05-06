import React from 'react'

import styled from 'styled-components'

export default ({ triggerModal }) =>
  <StyledContainer onClick={() => triggerModal(true)}>

  </StyledContainer>


const StyledContainer = styled.button`
  background: ${({ theme }) => theme.colors.white};
  width: 60px;
  height: 60px;
  box-shadow: 0 0 7px rgba(0, 0, 0, .12), 0 0 10px rgba(0, 0, 0, .24);
  margin: ${({ theme }) => theme.baseDistance}px;
  border: none;
  outline: none;
  cursor: pointer;
`