import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    background-color: #f0f0f0;
    margin: 0;
  }

  * {
    font-size: ${({ theme }) => theme['375'].fontSizes.body.fontSize};
    line-height: ${({ theme }) => theme['375'].fontSizes.body.lineHeight};
    font-family: ${({ theme }) => theme.fonts.Roboto};
    box-sizing: border-box;
    color: #fff;
  }

  h2 {
    font-size: ${({ theme }) => theme['375'].fontSizes.big.fontSize};
    line-height: ${({ theme }) => theme['375'].fontSizes.big.lineHeight};
  }

  h3 {
    font-size: ${({ theme }) => theme['375'].fontSizes.small.fontSize};
    line-height: ${({ theme }) => theme['375'].fontSizes.small.lineHeight};
  }

  @media(min-width: 375px) {
    * {
      font-size: ${({ theme }) => theme['1920'].fontSizes.body.fontSize};
      line-height: ${({ theme }) => theme['1920'].fontSizes.body.lineHeight};
    }

    h2 {
      font-size: ${({ theme }) => theme['1920'].fontSizes.big.fontSize};
      line-height: ${({ theme }) => theme['1920'].fontSizes.big.lineHeight};
    }

    h3 {
      font-size: ${({ theme }) => theme['375'].fontSizes.small.fontSize};
      line-height: ${({ theme }) => theme['1920'].fontSizes.small.lineHeight};
    }
  }
`