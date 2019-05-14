import styled from 'styled-components'

export const SCLame = styled('div')`
  font-size: 10px;
  box-shadow: inset 0px 0px 0px 1px;
  margin: 0;
  padding: 0;
  width: ${(props) => `${props.value}px`};
  height: ${(props) => `${props.larg}px`};
  display: flex;
  align-items: center;
  justify-content: center;
`
