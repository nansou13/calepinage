import React from 'react'
import PropTypes from 'prop-types'

import { SCRoom } from './styles'

const Room = ({ children, values }) => <SCRoom values={values}>{children}</SCRoom>

Room.propTypes = {
  children: PropTypes.any,
  values: PropTypes.shape({
    long: PropTypes.number,
    larg: PropTypes.number,
    dilatation: PropTypes.number,
  }),
}

export default Room
