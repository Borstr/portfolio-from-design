import React from 'react'

import styled from 'styled-components'

import Modal from '../general/Modal'

export default ({ triggerModal, shouldShow }) =>
  <Modal triggerModal={triggerModal} shouldShow={shouldShow}>
    <StyledContainer>
        <StyledTitle>Soemthign</StyledTitle>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Etiam volutpat justo venenatis dolor fermentum tempor. 
          Fusce id nunc aliquam, hendrerit eros ac, tristique leo. 
          Curabitur laoreet eros id ligula faucibus, vel viverra sapien pharetra. 
          Praesent gravida, mauris sit amet dapibus porta, arcu lectus vestibulum nisi, at congue risus tellus sed orci. 
          Fusce ut augue vel lorem consectetur feugiat. Suspendisse ut quam accumsan, dapibus risus sodales, laoreet sapien.
        </StyledParagraph>
    </StyledContainer>
  </Modal>

const StyledContainer = styled.div`
  padding: ${({ theme }) => theme.baseDistance * 4}px;
`

const StyledTitle = styled.h3`
  font-size: ${({ theme }) => theme['375'].fontSizes.big.fontSize};
  line-height: ${({ theme }) => theme['375'].fontSizes.big.lineHeight};
  margin: 0 0 ${({ theme }) => theme.baseDistance * 2}px 0;
`

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.baseDistance * 2.5}px;
  line-height: ${({ theme }) => theme.baseDistance * 3.5}px;
`