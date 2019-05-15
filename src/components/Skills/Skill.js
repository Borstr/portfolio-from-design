import React from 'react'

import styled from 'styled-components'

export default ({ handleSkillClick, data }) =>
  <StyledContainer onClick={() => handleSkillClick(data)}>
    <StyledImg src={data.icon.file.url} />
  </StyledContainer>

const StyledImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const StyledContainer = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  width: 60px;
  height: 60px;
  box-shadow: 0 0 7px rgba(0, 0, 0, .12), 0 0 10px rgba(0, 0, 0, .24);
  margin: ${({ theme }) => theme.baseDistance}px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: transform 300ms ease-in-out;
  padding: 8px;

  &:hover, &:focus {
    transform: scale(1.1);
  }

  @media(min-width: 375px) {
    height: 100px;
    width: 100px;
  }
`