import React,{useState} from 'react'

export default function App() {
  
  const [form,setForm]=useState({"nome":"", "curso":"", "ano":""})//UM STATE só para todos os elementos do formulário
  const handlFormChange=(e)=>{//função manipuladora 
    if(e.target.getAttribute('name')=='fnome'){
      setForm({"nome":e.target.value,"curso":form.curso,"ano":form.ano})
    }else if(e.target.getAttribute('name')=='fcurso'){
      setForm({"nome":form.nome,"curso":e.target.value,"ano":form.ano})
    }else if(e.target.getAttribute('name')=='fano'){
      setForm({"name":form.name, "curso":form.curso, "ano":e.target.value})
    }
  }

  return(
    <>
      <label>Nome</label>
      <input type='text' name='fnome' value={form.nome} onChange={(e)=>handlFormChange(e)}/><br/>
      <label>Curso</label>
      <input type='text' name='fcurso' value={form.curso} onChange={(e)=>handlFormChange(e)}/><br/>
      <label>Ano</label>
      <input type='text' name='fano' value={form.ano} onChange={(e)=>handlFormChange(e)}/><br/>


      <p>Nome digitado: {form.nome}</p>
      <p>Curso digitado: {form.curso}</p>
      <p>Ano digitado: {form.ano}</p>
    </>
  );
}
  
