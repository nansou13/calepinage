import React from 'react'
import PropTypes from 'prop-types'

import { SCPiece } from './styles'

const Piece = ({ children, values }) => <SCPiece values={values}>{children}</SCPiece>

Piece.propTypes = {
  children: PropTypes.any,
  values: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
}

export default Piece
