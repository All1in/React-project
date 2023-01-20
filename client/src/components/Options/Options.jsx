import React from 'react'
import PropTypes from 'prop-types'
import styles from './Options.module.scss'

const Options = (props) => {
  const { sizeFirst, sizeSecond, changeOnSmaller, changeOnBigger, product } =
    props
  return (
    <div className={styles.containerForSize}>
      <div className={styles.container}> {product} </div>
      <span> view </span>
      <span className={styles.sizeChanger} onClick={changeOnSmaller}>
        {sizeFirst}
      </span>
      <span className={styles.sizeChanger} onClick={changeOnBigger}>
        {sizeSecond}
      </span>
    </div>
  )
}

Options.propTypes = {
  sizeFirst: PropTypes.number.isRequired,
  sizeSecond: PropTypes.number.isRequired,
  changeOnSmaller: PropTypes.func.isRequired,
  changeOnBigger: PropTypes.func.isRequired,
  product: PropTypes.string.isRequired,
}

Options.defaultProps = {
  sizeFirst: 2,
  sizeSecond: 4,
  product: 'women',
}

export default Options
