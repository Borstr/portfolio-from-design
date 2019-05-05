import React, { useState } from 'react'

import WavyTemplate from '../templates/WavyTemplate'

import Programming from '../components/Projects/Programming'
import Design from '../components/Projects/Design'
import ProjectModal from '../components/Projects/ProjectModal'

export default () => {
  const [ shouldShow, triggerModal ] = useState(null)

  return (
    <WavyTemplate>
      <Programming triggerModal={triggerModal}/>
      <Design triggerModal={triggerModal}/>
      <ProjectModal shouldShow={shouldShow} triggerModal={triggerModal}/>
    </WavyTemplate>
  )
}

