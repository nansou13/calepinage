import React from 'react'
import PropTypes from 'prop-types'

import { SCLame } from './styles'

const Lame = ({ value, larg }) => <SCLame {...{ value, larg }}>{`${value}cm`}</SCLame>

Lame.propTypes = {
  value: PropTypes.number,
  larg: PropTypes.number,
}

export default Lame
