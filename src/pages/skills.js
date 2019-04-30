import React from 'react'

import styled from 'styled-components'

import WavyTemplate from '../templates/WavyTemplate'

import Frontend from '../components/Skills/Frontend'
import Backend from '../components/Skills/Backend'
import Others from '../components/Skills/Others'
import Tools from '../components/Skills/Tools'
import Learning from '../components/Skills/Learning'
import InnerSection from '../components/Skills/InnerSection'

export default () => 
  <WavyTemplate>
    <Frontend />
    <StyledGradientContainer>
      <InnerSection title="Back-end" />
      <InnerSection title="Others" />
      <InnerSection title="Tools" />
    </StyledGradientContainer>
    <Learning />
  </WavyTemplate>

const StyledGradientContainer = styled.div`
  background: ${({ theme }) => theme.colors.gradient};
`