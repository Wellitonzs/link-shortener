import React from 'react'
import { useState } from 'react'

import Menu from '../../components/Menu'
import LinkItem from '../../components/LinkItem'

import { FiLink } from 'react-icons/fi'
import './Home.css'

import api from '../../services/api'
import { saveLink } from '../../services/StoreLinks'
 
const Home = () => {
  const [link, setLink] = useState('')
  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false)

  async function handleShortlink() {
    try {
      const response = await api.post('/shorten', {
        long_url: link
      })
      setData(response.data)
      setShowModal(true)
      saveLink('@encurtaLink', response.data)
      setLink('')
    } catch {
      alert('Parece que ocorreu algum problema :C')
      setLink('')
    }
  }

  return (
    <div className='container-home'>
      <div className='logo'>
        <img src="cadeia.png" alt="logo-site" />
        <h1>Encurtador de Links</h1>
        <span>Cole seu link abaixo para encurtar</span>
      </div>
      <div className='area-input'>
        <div>
          <FiLink size={24} color="#FFF" />
          <input
            placeholder='Cole seu link aqui...'
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button onClick={handleShortlink}>Gerar Link</button>
      </div>
      <Menu />
      {showModal && (
        <LinkItem 
          closeModal={() => setShowModal(false)}
          content={data}
        />
      )}
    </div>
  )
}

export default Home