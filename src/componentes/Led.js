import React from 'react'
import Bandeira from './imgs/Brasil.png'
import Comunista from './imgs/Comunista.png'

export default function Led(props){
  return(
    <>
       <img style={{width:'800px'}} src={props.sim?Bandeira:Comunista}/>
       <button onClick={()=>props.setSim(!props.sim)}>
          {props.sim?'Você é Comunista => clique Aqui':'Se você é Brasileiro => clique Aqui'}
       </button>
    </>
  );
}
  