import React from 'react'
import PropTypes from 'prop-types'

import Lame from 'Components/Lame'
import { SCLine } from './styles'

const Line = ({ data, lame: { larg } }) => (
  <SCLine>
    {data && data.map((line, i) => <Lame key={`${i}-lame`} value={line} larg={larg} />)}
  </SCLine>
)

Line.propTypes = {
  data: PropTypes.array,
  lame: PropTypes.shape({
    larg: PropTypes.number,
  }),
}

export default Line
