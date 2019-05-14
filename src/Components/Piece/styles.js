import styled from 'styled-components'

export const SCPiece = styled('div')`
  position: absolute;
  box-shadow: inset 0px 0px 0px 1px;
  background: black;
  top: ${(props) => `${props.values.top || 0}px`};
  left: ${(props) => `${props.values.left || 0}px`};
  width: ${(props) => `${props.values.width || 0}px`};
  height: ${(props) => `${props.values.height || 0}px`};
`
