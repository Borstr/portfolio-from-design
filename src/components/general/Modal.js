import React from 'react'

import styled, { keyframes } from 'styled-components'

export default class extends React.Component {  
  constructor(props) {
    super(props)

    this.closeModalOnEsc = this.closeModalOnEsc.bind(this)
  }
  
  static Description = ({ shouldShow, html }) => 
    <StyledDescription 
      shouldShow={shouldShow} 
      dangerouslySetInnerHTML={{ __html: html }} 
    />
  

  // static Image = ({ shouldShow, html }) => (
    // <StyledImage shouldShow={shouldShow} dangerouslySetInnerHTML={{ __html: html }} />
  // )

  static Title = ({ shouldShow, children }) => (
    <StyledTitle shouldShow={shouldShow}>
      {children}
    </StyledTitle>
  )
  
  closeModalOnEsc(e) {
    if(e.keyCode == '27') {
      this.props.triggerModal(false)
    }
  }
  
  render() {
    const { triggerModal, shouldShow, children } = this.props

    if(shouldShow) {
      document.body.addEventListener('keydown', this.closeModalOnEsc, false)
    } else {
      document.body.removeEventListener('keydown', this.closeModalOnEsc, false)
    }
    
    return (
      <div>
        <StyledContainer shouldShow={shouldShow}>
          {React.Children.map(children, childElement => 
            React.cloneElement(childElement, { shouldShow })
          )}
        </StyledContainer>
        <StyledOverlay onClick={() => triggerModal(false)} shouldShow={shouldShow}/>
      </div>
    )
  }
} 

const StyledImage = styled.img`

`


const StyledTitle = styled.h3`
  font-size: ${({ theme }) => theme['375'].fontSizes.big.fontSize};
  line-height: ${({ theme }) => theme['375'].fontSizes.big.lineHeight};
  margin: 0 0 ${({ theme }) => theme.baseDistance * 2}px 0;
`

const StyledDescription = styled.p`
  font-size: ${({ theme }) => theme.baseDistance * 2.5}px;
  line-height: ${({ theme }) => theme.baseDistance * 3.5}px;
  animation: 300ms ${fade} ease-in-out 500ms;
`

const fade = keyframes`
 from {
   opacity: 0;
 }

 to {
   opacity: 1;
 }
`

const StyledContainer = styled.div`
  position: fixed;
  left: 0;
  top: 60px;
  z-index: 999999;
  width: 80vw;
  height: calc(100vh - 60px);
  background: ${({ theme }) => theme.colors.gradientNav};
  display: ${({ shouldShow }) => shouldShow === null ? 'none' : 'block'};
  animation: 500ms ${({ shouldShow }) => shouldShow ? showModal : shouldShow === null ? '' : hideModal} ease-in-out forwards;
  padding: ${({ theme }) => theme.baseDistance * 2}px;

  @media(min-width: 600px) {
    width: 400px;
  }
`

const showModal = keyframes`
  from {
    left: -80vw;

    @media(min-width: 600px) {
      left: -400px;
    }
  }

  to {
    left: 0;
  }
`

const hideModal = keyframes`
  from { 
    left: 0;
  }

  to {
    left: -80vw;

    @media(min-width: 600px) {
      left: -400px;
    }
  }
`

const StyledOverlay = styled.button`
  position: fixed;
  left: 0;
  top: 60px;
  z-index: 99999;
  width: 100vw;
  height: calc(100vh - 60px);
  background-color: rgba(0, 0, 0, .4);
  border: none;
  outline: none;
  display: ${({ shouldShow }) => shouldShow === null ? 'none' : 'block'};
  animation: 500ms ${({ shouldShow }) => shouldShow ? showOverlay : shouldShow === null ? '' : hideOverlay} ease-out forwards;
`

const showOverlay = keyframes`
  from {
    left: -100vw;
  }

  to {
    left: 0;
  }
`

const hideOverlay = keyframes`
  from {
    left: 0;
  }

  to {
    left: -100vw;
  }
`