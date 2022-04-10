import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Header from './Header'

const Layout = ({ children, pageName }) => {
  let layoutClass = ''

  if (pageName) {
    layoutClass = `${layoutClass} page-${pageName}`
  }

  return (
    <>
      <Helmet bodyAttributes={{ class: layoutClass }}>
        <title>Macabre Maps</title>
      </Helmet>
      <div className='wrapper'>
        <Header />
        <main>
          {children}
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string
}

export default Layout
