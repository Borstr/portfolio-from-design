import React, { useState } from 'react'

import styled from 'styled-components'

import WavyTemplate from '../templates/WavyTemplate'

import Frontend from '../components/Skills/Frontend'
import Learning from '../components/Skills/Learning'
import InnerSection from '../components/Skills/InnerSection'
import SkillModal from '../components/Skills/SkillModal'

export default () => {
  const [ shouldShow, triggerModal ] = useState(null)

  return (
    <WavyTemplate>
      <Frontend triggerModal={triggerModal}/>
      <StyledGradientContainer>
        <InnerSection triggerModal={triggerModal} title="Back-end" />
        <InnerSection triggerModal={triggerModal} title="Others" />
        <InnerSection triggerModal={triggerModal} title="Tools" />
      </StyledGradientContainer>
      <Learning triggerModal={triggerModal} />
      <SkillModal shouldShow={shouldShow} triggerModal={triggerModal}/>
    </WavyTemplate>
  )
}

const StyledGradientContainer = styled.div`
  background: ${({ theme }) => theme.colors.gradient};
`