import React from 'react'
import Imagem1 from './imgs/imagem1.png'

export default function Header(){
    return(
      <header>
         <img src={Imagem1}/>
         <h1>CFB Cursos</h1>
      </header>
    )
}