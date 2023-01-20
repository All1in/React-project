import React from 'react'

const Message = ({ text }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <p>
        <b>{text}</b>
      </p>
    </div>
  )
}

export default Message
