import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import styled from 'styled-components'

import MainTemplate from '../templates/MainTemplate'
import Modal from '../components/general/Modal'

import Frontend from '../components/Skills/Frontend'
import Tools from '../components/Skills/Tools'
import InnerSection from '../components/Skills/InnerSection'

export default () => {
  const [ shouldShow, triggerModal ] = useState(null)
  const [ modalData, triggerModalData ] = useState({ 
    title: '', 
    description: {
      childMarkdownRemark: {
        html: ''
      }
    } 
  })

  const { allContentfulTechnology: { edges: skills } } = useStaticQuery(graphql`
    {  
      allContentfulTechnology {
        edges {
          node {
            title
            type
            description {
              childMarkdownRemark {
                html
              }
            }
            icon {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  function handleSkillClick(modalData) {
    triggerModal(true)
    triggerModalData(modalData)
  }
  
  return (
    <MainTemplate>
      <Frontend 
        handleSkillClick={handleSkillClick} 
        skills={skills}
      />
      <StyledGradientContainer>
        <InnerSection handleSkillClick={handleSkillClick} title="Backend" skills={skills} type='be' />

        <InnerSection handleSkillClick={handleSkillClick} skills={skills} type='others'  title="Others" />
      </StyledGradientContainer>
      <Tools handleSkillClick={handleSkillClick} skills={skills} />
      <Modal data={modalData} shouldShow={shouldShow} triggerModal={triggerModal}>
        <Modal.Title>
          {modalData.title}
        </Modal.Title>
        <Modal.Description html={modalData.description.childMarkdownRemark.html} />
      </Modal>
    </MainTemplate>
  )
}

const StyledGradientContainer = styled.div`
  background: ${({ theme }) => theme.colors.gradient};
`