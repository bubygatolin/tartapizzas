
import './FormStyles.css';

import React, { useState } from 'react'
import emailjs from '@emailjs/browser';


const Form = () => {

  
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [assunt, setAssunt] = useState('')
const [message, setMessage] = useState('')

function sendEmail(e){
  e.preventDefault();

  alert('enviado')
  

  if(name === '' || email === '' || message === ''){
  alert('Preencha todos os campos');
  return;
  }

 const templateParams = {
  from_name: name,
  message: message,
  email: email
 }

 emailjs.send('service_cvxyw0l', 'template_thglzdz', templateParams,'7irR28ZpQMYYinH_6')
 .then((response) => {
  console.log('enviado', response.status, response.text)
  setName('')
  setEmail('')
  setMessage('')
  setAssunt ('')
 }, (err)=>{
  console.log('ERRO:', err)
 })

}
  
  return (
    <div className='form' onSubmit={sendEmail}>
        <form>
            <label>Seu Nome</label>
            <input
            type='text'
            placeholder='Digite seu nome...'
            onChange={(e) => setName(e.target.value)}
            value={name}
            />

            <label>Email</label>
            <input
            type='email' 
            placeholder='Digite seu email...'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />

            <label>Assunto</label>
            <input
            type='text'
            placeholder='Assunto...'
            onChange={(e) => setAssunt(e.target.value)}
            value={assunt} 
            />

            <label>Menssagem</label>
            <textarea
             rows= '6' placeholder='Digite sua menssagem aqui..'
             onChange={(e) => setMessage(e.target.value)}
             value={message}
             />
            <button className='btn' type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Form
