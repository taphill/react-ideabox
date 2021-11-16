import React from "react"
import Card from "./Card"
import './Ideas.css'

function Ideas({ ideas }) {
  const cards = ideas.map(idea => {
    return (
      <Card
        key={idea.id}
        id={idea.id}
        title={idea.title}
        description={idea.description}
      />
    )
  })

  return (
    <div className="ideas-container">
      {cards}
    </div>
  )
}

export default Ideas