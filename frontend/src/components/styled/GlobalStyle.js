import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    text-decoration: none;
  }

  html, body {
    margin: 0px;
  }

  main {
    min-height: 100vh;
    color: black;
  }
`

export default GlobalStyle