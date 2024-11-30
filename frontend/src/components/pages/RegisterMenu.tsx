import { useRef } from 'react'
// import axiosClient from '../client/axiosClient'

function RegisterMenu() {
  const menu = useRef(null)
  const bebida = useRef(null)
  const dia = useRef(null)

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const data = {
  //     menu: menu.current.value,
  //     bebida: bebida.current.value,
  //     dia: dia.current.value
  //   }
  //   axiosClient.post("/api/registrar", data).then((response)) => {
  //     if (response.status == 200) {
  //       alert("Menu registrado con exito")
  //       window.location.reload()
  //     } else {
  //       alert("No se pudo registrar el menu, intente mas tarde")
  //     }
  //   }
  // }

  return (
    <>
      <h1 className='text-8xl flex justify-center items-center'>Hola, soy la vista de registro</h1>
      <form /* onSubmit={} */>
        <input type="text" placeholder="Ingrese el menu" className="" ref={menu} />
        <input type="text" placeholder="Ingrese bebida" className="" ref={bebida} />
        <select name="" id="" className="" ref={dia}>
          <option value="Lunes" className="">Lunes</option>
          <option value="Martes" className="">Martes</option>
          <option value="Miercoles" className="">Miercoles</option>
          <option value="Jueves" className="">Jueves</option>
          <option value="Viernes" className="">Viernes</option>
          <option value="Sabado" className="">Sabado</option>
          <option value="Domingo" className="">Domingo</option>
        </select>
        <button type='submit' className="">Crear minuta</button>
      </form>
    </>
  )
}

export default RegisterMenu
