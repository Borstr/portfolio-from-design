import React, { useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import MainTemplate from '../templates/MainTemplate'

import Programming from '../components/Projects/Programming'
import Design from '../components/Projects/Design'
import Modal from '../components/general/Modal'

export default () => {
  const [ shouldShow, triggerModal ] = useState(null)
  const [
    { 
      title, 
      image: {
        fixed: {
          src: image
        }
      },
      description: {
        childMarkdownRemark: {
          html: description
        }
      }
    },
    triggerModalData 
  ] = useState({ 
    title: '', 
    description: {
      childMarkdownRemark: {
        html: ''
      }
    },
    image: {
      fixed: {
        src: ''
      }
    } 
  })

  function handleSkillClick(modalData) {
    triggerModal(true)
    triggerModalData(modalData)
  }

  return <StaticQuery
    query={graphql`
      {
        allContentfulProject {
          edges {
            node {
              title
              type,
              description {
                childMarkdownRemark {
                  html
                }
              }
              image {
                fixed(width: 384, height: 216) {
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={({ allContentfulProject: { edges: projects }}) => 
      <MainTemplate>
        <Programming projects={projects} handleSkillClick={handleSkillClick}/>
        <Design projects={projects} handleSkillClick={handleSkillClick}/>
        <Modal shouldShow={shouldShow} triggerModal={triggerModal}>
          <Modal.Title>
            {title}
          </Modal.Title>
          <Modal.Description html={description} shouldShow={shouldShow} />
        </Modal>
      </MainTemplate>
    }
  />
}

