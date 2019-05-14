import React from 'react'
import PropTypes from 'prop-types'

import { SCRadioButton } from './styles'

const RadioButton = ({ value, checked, onHandleChange, children }) => (
  <SCRadioButton>
    <input
      type="radio"
      name="mode"
      value={value}
      checked={checked}
      onChange={(e) => onHandleChange(e.currentTarget.value)}
    />
    {children}
  </SCRadioButton>
)

RadioButton.propTypes = {
  value: PropTypes.string,
  children: PropTypes.any,
  checked: PropTypes.bool,
  onHandleChange: PropTypes.func,
}

export default RadioButton
