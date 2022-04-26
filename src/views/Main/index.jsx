import React, { memo, useState, useCallback, useEffect } from 'react'
import Api from '../../api'
import Board from './components/Board'
import Panel from './components/Panel'
import {ContainerStyled}  from './style'


function Main() {
  const [dados, setDados] = useState({})
  const [pais, setPais] = useState('brazil')
  const updateAt = new Date().toLocaleString()
 
  const getDadosCovid = useCallback((pais) => {
    Api.getPais(pais)
      .then(dados => setDados(dados))
  }, [])

  useEffect(() => {    
    getDadosCovid(pais)
  }, [getDadosCovid, pais])
  
  const handleChange = ({ target }) => {
    const country = target.value
    setPais(country)
  }
  
  return (
    <ContainerStyled>
      <div className="mb-2">
        <Panel
          dados={dados}
          updateAt={updateAt}
          onChange={handleChange}
          pais={pais}
          getDadosCovid={getDadosCovid}
        />
      </div>
      <Board dados={dados} />
      
    </ContainerStyled>
  )
      
}
export default memo(Main);