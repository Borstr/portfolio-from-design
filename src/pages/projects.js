import React, { useState } from 'react'

import MainTemplate from '../templates/MainTemplate'

import Programming from '../components/Projects/Programming'
import Design from '../components/Projects/Design'
import ProjectModal from '../components/Projects/ProjectModal'

export default () => {
  const [ shouldShow, triggerModal ] = useState(null)

  return (
    <MainTemplate>
      <Programming triggerModal={triggerModal}/>
      <Design triggerModal={triggerModal}/>
      <ProjectModal shouldShow={shouldShow} triggerModal={triggerModal}/>
    </MainTemplate>
  )
}

