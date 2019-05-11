import React from 'react'

export default ({ className }) => 
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 .8" className={className}>
    <filter id="dropshadow">
      <feGaussianBlur dx="4" dy="8" stdDeviation=".15"/>
    </filter>
    <g>
      <rect height=".16" width="1" fill="#000" x="0" y="0" rx=".01" filter="url(#dropshadow)" />
      <rect height=".16" width=".96" fill="#fff" x=".02" y="0" rx=".01" />
    </g>
    <g>
      <rect height=".16" width="1" fill="#000" x="0" y="0.32" rx=".01" filter="url(#dropshadow)" />
      <rect height=".16" width=".96" fill="#fff" x=".02" y="0.32" rx=".01" />
    </g>
    <g>
      <rect height=".16" width="1" fill="#000" x="0" y="0.64" rx=".01" filter="url(#dropshadow)" />
      <rect height=".16" width=".96" fill="#fff" x=".02" y="0.64" rx=".01" />
    </g>
  </svg>
