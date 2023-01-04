import React from 'react' // exemplo de recurso de contenção



export default function Caixa(props){
  return(
    <>
      <p>{props.site}</p>
      {props.children}
      {props.children[0]}
      {props.children[1]}
      {props.children[0]}
      {props.children[1]}
    </>
  );
}