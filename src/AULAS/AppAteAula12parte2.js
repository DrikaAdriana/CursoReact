import React, {useState} from 'react'


export default function App() {

  const [cor,setCor ] = useState(1)
  
  const vermelho={color:'red'}
  const verde={color:'green'}
  const azul={color:'blue'}

  const retCor=(c)=>{
    if(c==1){
      return vermelho
    }else if(c==2){
      return verde
    }else{
      return azul
    }
  }

  const mudaCor=()=>{
    setCor(cor+1)
    if(cor > 2){
      setCor(1)
    }
  }

  return(
    <>
      <h1 style={retCor(cor)}>CFB Cursos</h1>
      <button onClick={()=>mudaCor()}>Muda Cor</button>
    </>
  );
}
  