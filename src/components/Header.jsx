import React from 'react'

import Container from './Container'
import Logo from './Logo'

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <p className='header-logo'>
          <Logo />
        </p>
      </Container>
    </header>
  )
}

export default Header
