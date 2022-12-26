import React, {useState} from 'react'
import Numero from './componentes/Numero'
import './App.css'

export default function App(){

  const [num, setNum]=useState(10)
  const[nome, setNome]=useState('Adriana') 

  return(
    <>
       <p>Valor do state num: {num}</p> 
       <Numero num={num} setNum={setNum}/>
       <p>{nome}</p>
    </>
  )
}
  