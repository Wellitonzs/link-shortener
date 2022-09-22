import './Error.css'
import { Link } from 'react-router-dom'

import React from 'react'

const Error = () => {
  return (
    <div className='container-error'>
        <img src="error-404.png" alt="error 404 foto" />
        <h1>Página não encontrada!</h1>
        <Link to="/">
            Voltar para home
        </Link>
    </div>
  )
}

export default Error