import React from 'react'
import { ThemeProvider } from 'styled-components'
import { food } from '../styles/Theme'
import Menu from './Menu'
import Home from './sections/Home'
import Navigation from './sections/Navigation'
import Review from './sections/Review'
import Offer from './sections/Offer'
import Services from './sections/Services'
import Blog from './sections/Blog'
import Footer from './sections/Footer'
import GlobalStyle from '../styles/Globalstyles'


const Main = () => {
  return (
    <>
    <GlobalStyle />
    <ThemeProvider theme={food}>
      <Navigation/>
      <Home />
      <Menu />
      <Services />
      <Offer />
      <Review />
      <Blog />
      <Footer />
    </ThemeProvider>
    </>
  )
}

export default Main