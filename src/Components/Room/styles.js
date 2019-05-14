import styled from 'styled-components'

export const SCRoom = styled('div')`
  position: relative;
  width: ${(props) => `${props.values.long}px`};
  height: ${(props) => `${props.values.larg}px`};
  box-shadow: inset 0px 0px 0px 2px #000;
  overflow: hidden;
  margin: auto;
`
