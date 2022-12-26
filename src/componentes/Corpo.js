import React from "react";
import Dados from './Dados'

export default function Corpo(){
  const cnl=()=>{
    return 'CBF Cursos'
}  
  const yt='youtube.com/cfbcursos'
  const crs='React.js'
  const somar=(v1,v2)=>{
    return v1+v2
  }

  return(
       <section>
          <h2>Curso de React</h2>
          <p>Aprendendo a criar componentes</p>
          <p>Excelente curso</p>
          <Dados
               canal={cnl}
               youtube={yt}
               curso={crs}
               somar={somar}
          />
       </section>
    )
}