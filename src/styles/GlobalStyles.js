import React from 'react'
import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
body {
font-family: 'Arial', sans-serif;
margin: 0;
padding: 0;
background: #f0f2f5;
color: #333;
}

a {
text-decoration: none;
color: inherit;
}

* {
box-sizing: border-box;
}
`

export default GlobalStyles;