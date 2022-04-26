import styled from 'styled-components'
import  CardContent from '../../../reactComponents/CardContent'
import Typography from '../../../reactComponents/Typography'


export const LabelStyled = styled(Typography)`
  font-weight: 500;
  font-family: 'Times New Roman', Times, serif;
  font-size: 1.5rem;
  color: burlywood;
 
`
export const fontFormat = styled(Typography)`
 text-align: center;
 
`
export const ValueStyled = styled(Typography)`
  font-weight: 400;
  font-size: 2.5rem;
  color: #7CFC00;
  font-family: 'Times New Roman', Times, serif;
`

export const CardContentStyled = styled(CardContent)`
  border-left: 8px solid ${({ color }) => color || '#5d78ff'};
  background-color: #1C1C1C;
`

export const CardPanelContentStyled = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  background-color:#1C1C1C;
  
`
export const TextPanelFormaStyled = styled(CardContent)`
font-family: Arial, Helvetica, sans-serif;
background-color: beige;
`
export const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 150px;
  background-color: #1C1C1C;
  color: #7CFC00;
  font-family: Georgia, 'Times New Roman', Times, serif;
`