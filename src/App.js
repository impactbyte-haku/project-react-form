import React from 'react'

import { Header } from './components/Header'
import { MyForm } from './components/MyForm'
import { FormRegister } from './components/FormRegister'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <MyForm />
        <FormRegister />
      </main>

      <Footer />
    </div>
  )
}

export default App
