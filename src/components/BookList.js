import React from 'react'
import { Link } from 'react-router-dom'

function BookList() {
  return (
    <>
    <div>BookList</div>
    <Link to="/Books/1">Book 1</Link>
    <br/>
    <Link to="/Books/2">Book 2</Link>
    <br/>
    <Link to="/Books/3">Book 3</Link>
    <br/>
    <Link to="/Books/4">Book 4</Link>
    <br/>
    <Link to="/Books/5">Book 5</Link>
    </>
  )
}

export default BookList