/* import { useState } from 'react'
import reactLogo from './assets/react.svg'*/

import { useState } from 'react'
import Header from './components/header'
import Formulario from './components/Formulario'
import ListadoTarea from './components/ListadoTarea'


function App() {

  const [ tareas, setTareas] = useState([])
  const [ tarea, setTarea] = useState({})

  return (
    <div className="container mx-auto mt-20">
      <Header />
        <div className="mt-12 md:flex" >
          <Formulario
            tareas = {tareas}
            setTareas={setTareas}
          />
          <ListadoTarea
            tareas={tareas}
            setTareas= {setTareas}
           />
        </div>

    </div>
  )
}

export default App
