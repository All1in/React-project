import React, { useState } from 'react'
import Modal from '@mui/material/Modal'
import PropTypes from 'prop-types'

const BasicModal = ({ handleClose, open, children }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {children}
      </Modal>
    </div>
  )
}

BasicModal.propTypes = {
  // handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  // setOpen: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default BasicModal
