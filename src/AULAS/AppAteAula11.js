import React, {useState} from 'react'
import Led from './componentes/Led'

export default function App(){

  const [sim, setSim]=useState(false)

  const cancelar=(obj)=>{
    return obj.preventDefault() //é preciso .preventDefault do próprio componente p/anumar acesso ao link
    //return false não funciona
  }

  return(
    <>
      <Led sim={sim} setSim={setSim}/>
      <a 
        href='http://youtube.com/cfbcursos'
        target='_blank'
        onClick={(e)=>cancelar(e)}
      >
        CFB Cursos
      </a>
    </>
  );
}
  
  
