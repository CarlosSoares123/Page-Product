import '../stylesheets/Header.css'

import cart from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'


function Header({children, onClick, cartI}) {
  return (
    <header>

    <div className="content">
    <div className="logo">Sneakers</div>
      <ul className='link-container'>
        <li><a href="#" className='link'>Collections</a></li>
        <li><a href="#" className='link'>Men</a></li>
        <li><a href="#" className='link'>Women</a></li>
        <li><a href="#" className='link'>About</a></li>
        <li><a href="#" className='link'>Contact</a></li>
      </ul>

    </div>

    <div className="user">
      <button onClick={onClick}>
        <img src={cart} alt="" />
      </button>

      <div className= { cartI ? 'off active' : 'off'}>
        <h2>Cart</h2>
        {children}
      </div>

      <figure>
        <img src={avatar} alt="" className='avatar' />
      </figure>
    </div>

  </header>
  )
}
export default Header