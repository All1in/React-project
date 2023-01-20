import React from 'react'

const ActualPrice = ({ previousPrice }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {previousPrice && <s style={{ color: 'red' }}>{previousPrice}₴</s>}
    </div>
  )
}

export default ActualPrice
