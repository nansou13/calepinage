import React, { Component, Fragment } from 'react'
import { DebounceInput } from 'react-debounce-input'

import Room from 'Components/Room'
import Piece from 'Components/Piece'
import Line from 'Components/Line'
import RoomForm from 'Components/Forms/room'
import LameForm from 'Components/Forms/lame'
import ModeForm from 'Components/Forms/mode'
import InputLabel from 'Components/Forms/inputLabel'

import {
  MODE_LAST_TO_FIRST,
  MODE_TIER_TWO_TIER,
  MODE_CUSTOM,
  MODE_ALTERNE,
  arrayPieces,
} from 'utils/constants'

import {
  SCContainer,
  SCLeftBlock,
  SCMessage,
  SCFlexContent,
  SCRemoveButton,
  SCCustomMessage,
} from './styles'

class App extends Component {
  state = {
    lame: { long: 128.5, larg: 19.4 },
    room: { long: 870, larg: 1195, dilatation: 0.5 },
    customLine: [],
    mode: MODE_LAST_TO_FIRST,
    nbLineMaxCalculated: 10,
    showWall: false,
  }

  updateVal = (type = false) => (id) => (value) => {
    if (!value || value <= 0) return false
    if (type) {
      this.setState((prevState) => ({ [type]: { ...prevState[type], [id]: value } }))
    } else {
      this.setState({ [id]: value })
    }
  }

  calculateLine = (firstVal) => {
    if (!firstVal) return false
    const baseLong = this.state.room.long - this.state.room.dilatation * 2
    const line = []
    if (firstVal > this.state.room.long) {
      line.push(baseLong)
      return line
    }
    line.push(firstVal)
    const nbR = Math.trunc((baseLong - firstVal) / this.state.lame.long)

    line.push(...Array.from(Array(nbR).keys()).map(() => this.state.lame.long))
    line.push(
      Math.round((baseLong - line.reduce((acc, curr) => acc + parseFloat(curr), 0)) * 100) / 100
    )

    return line
  }

  displayCustom = (index, line) => {
    const [first, ...other] = this.calculateLine(line) || []
    const end = other.pop() || false
    const chute = end && Math.round((this.state.lame.long - end) * 100) / 100

    return (
      <SCFlexContent>
        <InputLabel label="Longueur (cm)">
          <DebounceInput
            type="number"
            required
            value={first}
            onChange={(e) => this.updateFirstLineVal(index, e.target.value)}
            debounceTimeout={700}
            autoFocus
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                this.addCustomLine()
              }
            }}
          />
        </InputLabel>

        {first && (
          <SCCustomMessage>
            {` puis ${other.length} lame(s) de ${
              this.state.lame.long
            } et une derniere de ${end}, chute de: ${chute}`}
            <SCRemoveButton onClick={() => this.removeCustomLine(index)}>[X]</SCRemoveButton>
          </SCCustomMessage>
        )}
      </SCFlexContent>
    )
  }

  updateFirstLineVal = (index, val) => {
    const value = val < this.state.lame.long ? val : this.state.lame.long
    this.setState((prevState) => {
      const newVal = [...prevState.customLine]
      newVal[index] = value
      return { customLine: newVal }
    })
  }

  addCustomLine = () => {
    this.setState((prevState) => ({ customLine: [...prevState.customLine, null] }))
  }

  removeCustomLine = (index) => {
    this.setState((prevState) => {
      const newVal = [...prevState.customLine]
      if (index) {
        newVal.splice(index, 1)
      }
      return { customLine: newVal }
    })
  }

  generateLine = (forceLine) => {
    let lines = []
    if (forceLine) {
      lines.push(...forceLine)
    } else {
      switch (this.state.mode) {
        case MODE_CUSTOM:
          lines = this.state.customLine
            ? this.state.customLine.map((value) => this.calculateLine(value))
            : []
          break
        case MODE_ALTERNE: {
          const half = Math.round((this.state.lame.long / 2) * 100) / 100

          lines.push(this.calculateLine(this.state.lame.long), this.calculateLine(half))
          break
        }
        case MODE_TIER_TWO_TIER: {
          const Onetier = Math.round((this.state.lame.long / 3) * 100) / 100
          const Twotier = Onetier.toFixed(2) * 2

          lines.push(
            this.calculateLine(Onetier),
            this.calculateLine(Twotier),
            this.calculateLine(this.state.lame.long)
          )
          break
        }
        case MODE_LAST_TO_FIRST:
        default: {
          let first = false
          const baseLarg = this.state.room.larg - this.state.room.dilatation * 2
          const nbLineMaxCalculated =
            this.state.nbLineMaxCalculated || Math.trunc(baseLarg / this.state.lame.larg)

          lines.push(
            ...Array.from(Array(nbLineMaxCalculated).keys()).map(() => {
              const firstLame = first || this.state.lame.long
              const currentLine = this.calculateLine(firstLame)
              const last = currentLine[currentLine.length - 1]
              first = Math.round((this.state.lame.long - last) * 100) / 100
              return currentLine
            })
          )
          break
        }
      }
    }

    // CALCUl nbr en largeur
    const baseLarg = this.state.room.larg - this.state.room.dilatation * 2
    const nbrLarg = Math.trunc(baseLarg / this.state.lame.larg)
    const diffLarg = baseLarg - nbrLarg * this.state.lame.larg

    let i = lines.length - 1
    if (i < 0) {
      return false
    }

    return {
      values: Array.from(Array(nbrLarg + 1).keys()).map(() => {
        i = i === lines.length - 1 ? 0 : i + 1
        return lines[i]
      }),
      message:
        diffLarg > 0
          ? `La hauteur des lames de la dernière série fera ${diffLarg.toFixed(2)}cm`
          : false,
    }
  }

  render() {
    const { values: content = [], message = false } = this.generateLine()
    return (
      <div className="App">
        <h1>Mon Plan de Calepinage</h1>

        <SCContainer>
          <SCLeftBlock>
            <RoomForm room={this.state.room} updateVal={this.updateVal('room')} />
            <LameForm lame={this.state.lame} updateVal={this.updateVal('lame')} />
          </SCLeftBlock>
          <ModeForm
            customLine={this.state.customLine}
            addCustomLine={this.addCustomLine}
            mode={this.state.mode}
            updateVal={this.updateVal()('mode')}
            displayCustom={this.displayCustom}
          />
        </SCContainer>
        <SCMessage>{message && <strong>{message}</strong>}</SCMessage>

        {/* <div>
            show Wall :{' '}
            <input
              type="checkbox"
              checked={this.state.showWall}
              onClick={() => this.setState((prevState) => ({ showWall: !prevState.showWall }))}
            />
          </div> */}

        <Room values={this.state.room}>
          {this.state.showWall && (
            <Fragment>
              <div className="regle" style={{ top: 420, left: 408, width: 163, height: 5 }} />
              {arrayPieces.map((values, i) => (
                <Piece key={`${i}-piece`} values={values} />
              ))}
            </Fragment>
          )}

          {content &&
            content.length > 0 &&
            content.map((line, j) => <Line data={line} key={`${j}-line`} lame={this.state.lame} />)}
        </Room>
      </div>
    )
  }
}

export default App
