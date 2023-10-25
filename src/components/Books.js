import React from 'react'
import { useParams } from 'react-router-dom'

function Books() {
    const {id} = useParams()
  return (
    
    <div>Books {id}</div>
  )
}

export default Books