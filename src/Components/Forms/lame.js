import React from 'react'
import PropTypes from 'prop-types'

import { DebounceInput } from 'react-debounce-input'

import InputLabel from 'Components/Forms/inputLabel'
import { SCForm, SCFormTitle } from './styles'

const LameForm = ({ lame: { long, larg }, updateVal }) => (
  <SCForm>
    <SCFormTitle>Lames</SCFormTitle>
    <InputLabel label="Longueur (cm)">
      <DebounceInput
        type="text"
        value={long}
        onChange={(e) => updateVal('long')(e.target.value)}
        debounceTimeout={700}
      />
    </InputLabel>

    <InputLabel label="Largeur (cm)">
      <DebounceInput
        type="text"
        value={larg}
        onChange={(e) => updateVal('larg')(e.target.value)}
        debounceTimeout={700}
      />
    </InputLabel>
  </SCForm>
)

LameForm.propTypes = {
  updateVal: PropTypes.func,
  lame: PropTypes.shape({
    long: PropTypes.number,
    larg: PropTypes.number,
  }),
}

export default LameForm
