import React from "react"
import './Form.css'

function Form({ addIdea }) {
  const [inputs, setInputs] = React.useState({
    title: '',
    description: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setInputs({ ...inputs, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    addIdea({
      id: Date.now(),
      ...inputs
    })

    clearInputs()
  }

  const clearInputs = () => {
    setInputs({ title: '', description: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Title'
        name='title'
        value={inputs.title}
        onChange={handleChange}
      />

      <input
        type='text'
        placeholder='Description'
        name='description'
        value={inputs.description}
        onChange={handleChange}
      />

      <button>SUBMIT</button>
    </form>
  )
}

export default Form