import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Main from './Salad/Main'
import SignUp from './Salad/SignUp'
import SignIn from './Salad/SignIn'
import { food } from './styles/Theme'
import GlobalStyle from './styles/Globalstyles'


const App = () => {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={food} >
        <Routes location={location} key={location.pathname}>
          <Route exact path='/' element={<Main/>} />
          <Route exact path='/signin' element={<SignIn />} />
          <Route exact path='/signup' element={<SignUp />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App