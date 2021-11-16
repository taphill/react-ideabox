import React from "react"
import Form from "./Form"
import Ideas from './Ideas'
import './App.css'

function App() {
  const data = [
    { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
    { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
    { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
  ]

  const [ideas, setIdeas] = React.useState(data)

  const addIdea = newIdea => {
    setIdeas([...ideas, newIdea])
  }

  const deleteIdea = id => {
    const filteredIdeas= ideas.filter(idea => idea.id !== id) 

    setIdeas([...filteredIdeas])
  }

  return (
    <main className="App">
      <h1>Ideabox</h1>
      <Form addIdea={addIdea} />
      {ideas.length ? <Ideas ideas={ideas} deleteIdea={deleteIdea} /> : <h2>Add some ideas</h2>}
    </main>
  )
}

export default App