import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle `
*, *::before, *::after{
  margin: 0,
  padding: 0
}

html{
  overflow-x: hidden;
}

body{
  overflow-x: hidden;
  background-color: #fe8cce7;
}

h1,h2,h3,h4,h5,h6, p{
  margin: 0;
  padding: 0;
}

input, button{
  outline: none;
  border: none;
  background: none;
}

ul{
  list-style: none;
  padding-inline-start: 0;
}

a{
  color: inherit;
  text-decoration: none;
}

`

export default GlobalStyle