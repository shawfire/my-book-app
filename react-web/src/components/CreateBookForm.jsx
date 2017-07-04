import React from 'react'
import Field from './Field'

function handleSubmit(event, onCreate) {
  event.preventDefault()       
  // Get <form> 
  const form  = event.target
  const title = form.elements['title'].value
  const author = form.elements['author'].value
  const genre = form.elements['genre'].value
  console.log(title, author, genre)
  onCreate({title, author, genre})
}

export default function CreateBookForm({
  onCreate // ({title}) => {}
}) {
  return (
    <form onSubmit={ (event) => handleSubmit(event, onCreate) }>
       <Field label='Title' name='title' />
       <Field label='Author' name='author' />
       <Field label='Genre' name='genre' />
      <button type='submit'> 
        Create Book
      </button>   
    </form>
  )
}