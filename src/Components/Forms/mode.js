import React from 'react'
import PropTypes from 'prop-types'

import { MODE_LAST_TO_FIRST, MODE_TIER_TWO_TIER, MODE_CUSTOM, MODE_ALTERNE } from 'utils/constants'

import RadioButton from 'Components/RadioButton'

import { SCForm, SCFormTitle, SCAddCustomButton } from './styles'

const modeForm = ({ mode, updateVal, customLine, addCustomLine, displayCustom }) => (
  <SCForm>
    <SCFormTitle>Mode</SCFormTitle>
    <div>
      <RadioButton value={MODE_ALTERNE} checked={mode === MODE_ALTERNE} onHandleChange={updateVal}>
        <h3>Coupe de pierre</h3>
        <p>
          Appelé aussi "La pose alternée", Il vous suffit de décaler les lames sur une
          demi-longueur, pour un effet réussi et une pose simple à réaliser, mais moins naturel.
        </p>
      </RadioButton>
      <RadioButton
        value={MODE_LAST_TO_FIRST}
        checked={mode === MODE_LAST_TO_FIRST}
        onHandleChange={updateVal}
      >
        <h3>Coupe perdue</h3>
        <p>
          La chute de la série de lame précédente est utilisée pour démarrer la pose de la rangée
        </p>
      </RadioButton>
      <RadioButton
        value={MODE_TIER_TWO_TIER}
        checked={mode === MODE_TIER_TWO_TIER}
        onHandleChange={updateVal}
      >
        <h3>1/3 & 2/3</h3>
        <p>
          La première série commence par 1/3 de la lame, la seconde 2/3 et la dernière par la lame
          entière !
        </p>
      </RadioButton>
      <RadioButton value={MODE_CUSTOM} checked={mode === MODE_CUSTOM} onHandleChange={updateVal}>
        <h3>Mode sandbox</h3>
        <p>Ajoutez les séries que vous voulez, l'application générera les lignes</p>
        {mode === MODE_CUSTOM && (
          <div>
            <div>
              <SCAddCustomButton onClick={addCustomLine}>Ajouter une ligne</SCAddCustomButton>
            </div>
            {customLine &&
              customLine.length > 0 &&
              customLine.map((line, i) => displayCustom(i, line))}
          </div>
        )}
      </RadioButton>
    </div>
  </SCForm>
)

modeForm.propTypes = {
  updateVal: PropTypes.func,
  mode: PropTypes.string,
  customLine: PropTypes.array,
  addCustomLine: PropTypes.func,
  displayCustom: PropTypes.func,
}

export default modeForm
