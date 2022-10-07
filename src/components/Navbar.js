import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar-container'> <Link to="/" className='link'>
      <h1 className='title'>Pato Scores ⚽</h1>
    </Link>

    <Link to="/highlights" className="link2">
      <button className='button-highlights' role="button">Highlights</button>
    </Link>
        </div>
    
  )
}

export default Navbar