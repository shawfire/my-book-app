import React from 'react'
import Field from './Field'

function handleSubmit(event, onCreate) {
  event.preventDefault()       
  // Get <form> 
  const form  = event.target
  const title = form.elements['title'].value
  console.log(title)
  onCreate({title})
}

export default function CreateBookForm({
  onCreate // ({title}) => {}
}) {
  return (
    <form onSubmit={ (event) => handleSubmit(event, onCreate) }>
       <Field label='Title' name='title' />
      <button type='submit'> 
        Create Book
      </button>   
    </form>
  )
}