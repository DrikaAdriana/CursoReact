import React from 'react'
import Relogio from './componentes/Relogio'
import './App.css'

export default function App(){

  const textDestaque= {
    color: 'green',
    fontSize: '3em'
  }
  
  return(
    <>
      <section className='caixa'>
        <Relogio/>
        <h1 style={{color:'blue', fontSize: '5em'}}>CFB Cursos</h1>
        <h2 style={textDestaque}>Cursos de React</h2>
        <p className='texto'>Se inscreva em nosso canal
            e nos siga no instagram
        </p>
        <a href='https://www.youtube.com/cfbcursos'target='_blank'><strong>CFB Cursos</strong></a>    
        
      </section> 
    </>
  )
}
  
  
  