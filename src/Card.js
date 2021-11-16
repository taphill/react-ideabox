import React from "react"
import './Card.css'

function Card({ id, title, description }) {
  return (
    <div id={id} className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>🗑</button>
    </div>
  )
}

export default Card