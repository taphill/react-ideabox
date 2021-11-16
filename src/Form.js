import React from "react"
import './Form.css'

function Form() {
  const [inputs, setInputs] = React.useState({
    title: '',
    description: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setInputs({ ...inputs, [name]: value })
  }

  return (
    <form>
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