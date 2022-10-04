/* import { useState } from "react"; */


const Formulario = () => {

 const [ nombre, setNombre] = setNombre ('Hook') /* los hook son funciones */


 console.log(nombre)

    return( 
        <div className="w-1/2 lg:w-2/5"> {/* el lg toma el 40% */}
        <h2 className= "font-black text-3xl text-center">seguimiento de tareas </h2>

        <p className="text-lg mt-5 text-center ">
            añade tareas y {" "} 
        <span className="text-indigo-600 font bold">administalas</span>
        </p>

        <form className="bg_white shabdow-md">
            <div className="mb-5">
                <label htmlFor="Nombre"> nombre del dev</label> {/* htmlFor da accesibilidad al componente */}
           
                <input id= "nombre "className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                type="text" 
                placeholder = "nombre del desarrollador"
                />

            </div>

            <div className="mb-5">
                <label htmlFor="Puesto">Puesto del dev</label> {/* htmlFor da accesibilidad al componente */}
           
                <input id= "puesto" className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                type="text" 
                placeholder = "puesto del desarrollador"
                />

            </div>

            <div className="mb-5">
                <label htmlFor="alta">Alta</label> {/* htmlFor da accesibilidad al componente */}
           
                <input id= "alta" className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                type="date" 
                />

            </div>

            <div className="mb-5">
                <label htmlFor="detalle">Descripcion de la tarea</label> {/* htmlFor da accesibilidad al componente */}
           
                <textarea /* se autoajusta */
                id= "detalle" 
                className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                placeholder="describe la tarea"
                />

            </div>

            <input type="submit"
            className="
            bg.indigo-600 
            w-full p-3 text-white
            uppercase
            font-bold
            hover:bg-indigo-700 cursor-pointer transitions-color
            "
            />

        </form>

        </div>
    );
}

export default Formulario;