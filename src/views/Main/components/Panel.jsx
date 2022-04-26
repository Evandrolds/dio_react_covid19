import React ,{memo} from "react";
import RefreshIcon from '../../../imgs/RefreshIcon.svg'
import {Card, MenuItem, Typography, Button} from '../../../reactComponents'
import CardContent from "../../../reactComponents/CardContent";
import Select from '../../../reactComponents/Select'
import PAISES from '../../../utilitiesStyles/constants/paises'
import {CardPanelContentStyled, ItemStyled } from './style'
import { fontFormat } from "./style";



const navigatorHasShere = navigator.share

function Panel({ updateAt, onChange, dados, pais,getDadosCovid}){
    const {cases,recovered,deaths,todayCases,todayDeaths} = dados

    const renderPaises = (pais, index) => (
        <MenuItem key={`pais-${index}`} value={pais.value}>
          <ItemStyled>
            <div>{pais.label}</div>
            <img src={pais.flag} alt={`País-${pais.label}`} />
          </ItemStyled>
        </MenuItem>
      )
      const textCovid19 = `País: ${pais} - recuperados: ${recovered}`

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${pais}`,
      text: textCovid19,
      url: 'https://covid19dio.netlify.app/'
    })
  }
  
  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  )
 
  const renderCopyButton = (
    <div>
      <Button variant="contained" color="secondary" onClick={copyInfo} >
      
        Copiar
      </Button>
    </div>
  )
    
  return (
    <Card>
      <CardPanelContentStyled>
        <div>
           
          <Typography variant="h5" component="span" color="error" >  COVID19  </Typography>
          <Typography variant="h6" component="span" color="secondary"> <div>Painel Coronavírus</div> </Typography>
          <Typography variant="body2" component="span" color="error"><div>Atualizado em: {updateAt}</div> </Typography>
          <div className="pt-2">
            <Select onChange={onChange} value={pais}>
              {PAISES.map(renderPaises)}
            </Select>
          </div>
        </div>
        {navigatorHasShere ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  )
}  
export default memo(Panel)