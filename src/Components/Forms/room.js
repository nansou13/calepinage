import React from 'react'
import PropTypes from 'prop-types'
import { DebounceInput } from 'react-debounce-input'
import InputLabel from 'Components/Forms/inputLabel'

import { SCForm, SCFormTitle } from './styles'

const roomForm = ({ room: { long, larg, dilatation }, updateVal }) => (
  <SCForm>
    <SCFormTitle>Pièce</SCFormTitle>
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

    <InputLabel label="Joint de dilatation (cm)">
      <DebounceInput
        type="number"
        step="0.1"
        min={0}
        value={dilatation || 0}
        onChange={(e) => updateVal('dilatation')(e.target.value)}
        debounceTimeout={700}
      />
    </InputLabel>
  </SCForm>
)

roomForm.propTypes = {
  updateVal: PropTypes.func,
  room: PropTypes.shape({
    long: PropTypes.number,
    larg: PropTypes.number,
    dilatation: PropTypes.number,
  }),
}

export default roomForm
