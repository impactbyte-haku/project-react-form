import React from 'react'
import styled from '@emotion/styled'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { MyForm } from './components/MyForm'
import { FormRegister } from './components/FormRegister'
import { FormBeasts } from './components/FormBeasts'
import { FormikForm } from './components/FormikForm'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
`

const Main = styled.main`
  flex-grow: 1;
`

const App = () => {
  return (
    <Container>
      <Header />

      <Main>
        <MyForm />
        <FormRegister />
        <FormBeasts />
        <FormikForm />
      </Main>

      <Footer />
    </Container>
  )
}

export default App
