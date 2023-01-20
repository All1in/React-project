import React from 'react'
import PropTypes from 'prop-types'

const Headline = ({ element }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1> {element} not found! </h1>
    </div>
  )
}

Headline.propTypes = {
  element: PropTypes.string.isRequired,
}

Headline.defaultProps = {
  element: 'Cards',
}

export default Headline
