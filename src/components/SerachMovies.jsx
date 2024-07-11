import React from "react"

const SerachMovies = () => {
  return (
    <div>
      <form className="form">
        <label htmlFor="query" className="label">Movie Name</label>
        <input className="input" type="text" name="query" placeholder="i.e Jurassic park" />
        <button className="button" type="submit">Search</button>
      </form>
    </div>
  )
}

export default SerachMovies
