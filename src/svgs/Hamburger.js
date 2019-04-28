import React from 'react'

export default ({ className }) => 
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 66 58" className={className}>
    <defs>
      <filter id="Rectangle_137" x="0" y="0" width="66" height="26" filterUnits="userSpaceOnUse">
        <feOffset input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feFlood flood-opacity="0.161"/>
        <feComposite operator="in" in2="blur"/>
        <feComposite in="SourceGraphic"/>
      </filter>
      <filter id="Rectangle_138" x="0" y="32" width="66" height="26" filterUnits="userSpaceOnUse">
        <feOffset input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur-2"/>
        <feFlood flood-opacity="0.161"/>
        <feComposite operator="in" in2="blur-2"/>
        <feComposite in="SourceGraphic"/>
      </filter>
      <filter id="Rectangle_139" x="0" y="16" width="66" height="26" filterUnits="userSpaceOnUse">
        <feOffset input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur-3"/>
        <feFlood flood-opacity="0.161"/>
        <feComposite operator="in" in2="blur-3"/>
        <feComposite in="SourceGraphic"/>
      </filter>
    </defs>
    <g id="Hamburger" transform="translate(-310 -1)">
      <g transform="matrix(1, 0, 0, 1, 310, 1)" filter="url(#Rectangle_137)">
        <rect id="Rectangle_137-2" data-name="Rectangle 137" width="48" height="8" rx="1" transform="translate(9 9)" fill="#fff"/>
      </g>
      <g transform="matrix(1, 0, 0, 1, 310, 1)" filter="url(#Rectangle_138)">
        <rect id="Rectangle_138-2" data-name="Rectangle 138" width="48" height="8" rx="1" transform="translate(9 41)" fill="#fff"/>
      </g>
      <g transform="matrix(1, 0, 0, 1, 310, 1)" filter="url(#Rectangle_139)">
        <rect id="Rectangle_139-2" data-name="Rectangle 139" width="48" height="8" rx="1" transform="translate(9 25)" fill="#fff"/>
      </g>
    </g>
  </svg>
