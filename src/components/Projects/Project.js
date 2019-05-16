import React from 'react'

import styled from 'styled-components'

export default ({ handleSkillClick, data }) => 
  <StyledContainer onClick={() => handleSkillClick(data)}>
    <Image src={data.image.fixed.src} alt="" />
    <Title>{data.title}</Title>
  </StyledContainer>

const Title = styled.h3`
  color: #000;
  margin: 0;
  margin-top: 16px;
`

const Image = styled.img`
  max-width: 100%;
`

const StyledContainer = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  width: 400px;
  max-width: 100%;
  padding: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: ${({ theme }) => theme.baseDistance * 2}px;
  transition: transform 300ms ease-in-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, .12), 0 0 5px rgba(0, 0, 0, .24);

  &:hover, &:focus {
    transform: scale(1.05);
  }
`