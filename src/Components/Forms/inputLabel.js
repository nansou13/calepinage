import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const SCInputLabel = styled('div')`
  position: relative;
`

const InputLabel = ({ label, children }) => (
  <SCInputLabel>
    {children}
    <label>{label}</label>
  </SCInputLabel>
)

InputLabel.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
}

export default InputLabel
