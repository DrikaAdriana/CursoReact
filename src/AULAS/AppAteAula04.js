import React from 'react'
import Imagem1 from './componentes/imgs/imagem1.png'


export default function App(){
  const canal=()=>{ 
    return('CFB Cursos')
  }
  const curso=()=>{
    return ('Curso de React')
  }
  return(
    <section>
      <header>
        <p>{'Canal: ' + canal()}</p>
        <p>{curso()}</p>
      </header>
      <section>
        <img src={Imagem1}/> 
        <img src='./imagem2.png'/> 
      </section>
    </section>
  )
}