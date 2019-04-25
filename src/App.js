import React from 'react'

import { Header } from './components/Header'
import { FormRegister } from './components/FormRegister'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <FormRegister />
      </main>

      <Footer />
    </div>
  )
}

export default App
