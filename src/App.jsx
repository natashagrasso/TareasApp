/* import { useState } from 'react'
import reactLogo from './assets/react.svg'*/

import Header from './components/header'
import './App.css' 
import Formulario from './components/Formulario'
import ListadoTarea from './components/ListadoTarea'


function App() {
  return(
    <div className='container mx-auto mt-20'> 
      <Header />
      <Formulario className ='mt-12 flex' />
      <ListadoTarea />
    </div>
  )

}

export default App
