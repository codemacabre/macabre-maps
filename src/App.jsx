import React from 'react'
import PropTypes from 'prop-types'

import './styles/main.scss'

const App = ({ placeholder }) => {
  return (
    <>
      <div className='placeholder'>
        <img src={placeholder} />
      </div>
    </>
  )
}

export default App

App.propTypes = {
  placeholder: PropTypes.string
}
