import React from 'react'

import styled from 'styled-components'

export default ({ children, shouldShow, triggerModal }) => 
  <>
    <StyledContainer shouldShow={shouldShow}>
      {children}
    </StyledContainer>
    <StyledOverlay onClick={() => triggerModal(false)} shouldShow={shouldShow}/>
  </>

const StyledContainer = styled.div`
  position: fixed;
  left: 0;
  top: 60px;
  z-index: 999999;
  width: 80vw;
  height: calc(100vh - 60px);
  background: ${({ theme }) => theme.colors.gradientNav};
  display: ${({ shouldShow }) => shouldShow === null ? 'none' : 'block'};
  animation: 500ms ${({ shouldShow }) => shouldShow ? 'showModal' : shouldShow === null ? '' : 'hideModal'} ease-out;
  animation-fill-mode: forwards;

  @keyframes showModal {
    0% { left: -80vw }
    100% { left: 0 }
  }

  @keyframes hideModal {
    from { left: 0 }
    to { left: -80vw }
  }
`

const StyledOverlay = styled.button`
  position: fixed;
  left: 0;
  top: 60px;
  z-index: 99999;
  width: 100vw;
  height: calc(100vh - 60px);
  background: rgba(0, 0, 0, .4);
  border: none;
  outline: none;
  display: ${({ shouldShow }) => shouldShow === null ? 'none' : 'block'};
  animation: 500ms ${({ shouldShow }) => shouldShow ? 'showOverlay' : shouldShow === null ? '' : 'hideOverlay'} ease-out;
  animation-fill-mode: forwards;

  @keyframes showOverlay {
    from { left: -100vw }
    to { left: 0 }
  }

  @keyframes hideOverlay {
    from { left: 0 }
    to { left: -100vw }
  }
`