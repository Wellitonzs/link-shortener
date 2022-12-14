import './Menu.css'

import { BsYoutube, BsInstagram } from 'react-icons/bs'

import { Link } from 'react-router-dom'
 
const Menu = () => {
  return (
    <div className='menu'>
        <a className='social' href="https://www.youtube.com/channel/UCm6OtYEML6owJy_Q2kc4efw">
            <BsYoutube color='#FFF' size={24} />
        </a>
        <a className='social' href="https://www.youtube.com/channel/UCm6OtYEML6owJy_Q2kc4efw">
            <BsInstagram color='#FFF' size={24} />
        </a>
        <Link className='menu-item' to="/links">
            Meus Links
        </Link>
    </div>
  )
}

export default Menu