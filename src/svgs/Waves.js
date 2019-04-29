import React from 'react'

export const Wave375Top = ({ className }) => 
  <svg className={className} viewBox="0 0 100 15.5">
    <filter id="wave_375_bot_dropshadow">
      <feGaussianBlur in="SourceGraphic" stdDeviation=".5" />
    </filter>
    <path
      d="M0,0 L100,0 L100,10 C100,15 70,15 60,12 C50,10 40,6 30,6 C20,6 10,7 0,10"
      transform="translate(0, 1)"
      fill="rgba(0, 0, 0, .4)"
      filter="url(#wave_375_bot_dropshadow)"
    />
    <path
      d="M0,0 L100,0 L100,10 C100,15 70,15 60,12 C50,10 40,6 30,6 C20,6 10,7 0,10"
      fill="#3f51b5 "
    />
  </svg>

export const Wave375Bot = ({ className }) => 
  <svg className={className} transform="rotate(180)" viewBox="0 0 100 15.5">
    <filter id="wave_375_bot_dropshadow">
      <feGaussianBlur in="SourceGraphic" stdDeviation=".5" />
    </filter>
    <path
      d="M0,0 L100,0 L100,10 C100,15 70,15 60,12 C50,10 40,6 30,6 C20,6 10,7 0,10"
      transform="translate(0, 1)"
      fill="rgba(0, 0, 0, .4)"
      filter="url(#wave_375_bot_dropshadow)"
    />
    <path
      d="M0,0 L100,0 L100,10 C100,15 70,15 60,12 C50,10 40,6 30,6 C20,6 10,7 0,10"
      fill="#3f51b5 "
    />
  </svg>
