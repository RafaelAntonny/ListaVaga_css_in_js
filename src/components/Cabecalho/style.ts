import styled from 'styled-components'

export const Cabecalho = styled.header`
  background-color: ${(props) => props.theme.corSecundaria};
  color: ${(props) => props.theme.corSecundaria};
  text-align: center;
  padding: 24px 0;
`

export default Cabecalho
