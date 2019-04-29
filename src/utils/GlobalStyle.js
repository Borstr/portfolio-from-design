import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    background-color: #f0f0f0;
    margin: 0;
  }

  * {
    font-size: ${({ theme }) => theme['375'].fontSizes.body.fontSize};
    font-family: ${({ theme }) => theme.fonts.Roboto};
    box-sizing: border-box;
    color: #fff;
  }

  h1 {
    font-size: ${({ theme }) => theme['375'].fontSizes.H1.fontSize};
    line-height: ${({ theme }) => theme['375'].fontSizes.H1.lineHeight};
  }

  h2 {
    font-size: ${({ theme }) => theme['375'].fontSizes.H2.fontSize};
    line-height: ${({ theme }) => theme['375'].fontSizes.H2.lineHeight};
  }

  h3 {
    font-size: ${({ theme }) => theme['375'].fontSizes.H3.fontSize};
    line-height: ${({ theme }) => theme['375'].fontSizes.H3.lineHeight};
  }
`