import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import PropTypes from 'prop-types'

const DropDown = (dropDownProps) => {
  const { labelFor, value, onChange, values } = dropDownProps
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
        <InputLabel id="demo-simple-select-standard-label">
          {labelFor}
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={onChange}
          label="Age"
        >
          <MenuItem disabled value="labelFor">
            <em>{labelFor}</em>
          </MenuItem>
          {values.map((value) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </div>
  )
}

DropDown.propTypes = {
  labelFor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.array.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

DropDown.defaultProps = {
  labelFor: 'Sort By',
  values: [],
}

export default DropDown
