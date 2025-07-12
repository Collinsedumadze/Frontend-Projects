import React from 'react'
import "./News.css"

const News = () => {
  return (
    <div className='news'>
      <h1 className="header">
        Subscribe now & get 20% off
      </h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div className='input-field'>
        <input
          type="text"
          placeholder="Enter your email"
        />
        <button>
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default News
