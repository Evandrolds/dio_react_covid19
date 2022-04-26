import React, {memo} from 'react';

import {Grid,Skeleton } from '../../../reactComponents';

import Card from './Card'

function Board({dados}){
    const {cases,todayDeaths, recovered, deaths, todayCases} = dados
    const getValues =(value) => value ? value: <Skeleton variant="text" width={182} height={60} />
    return (
        <Grid container spacing={4}>
         <Grid item xs={12} md={3}>
          <Card value={getValues(cases)} label="Total de casos no Pais" color="#fceb00"/>
          </Grid>   
         <Grid item xs={12} md={3}>
          <Card value={getValues(todayDeaths)} label="Total de óbitos apenas Hoje !" color="#fc5000"/>
          </Grid>   
         <Grid item xs={12} md={3}>
          <Card value={getValues(todayCases)} label="Total de casos apenas Hoje" color="#6206da"/>
          </Grid>   
         <Grid item xs={12} md={3}>
          <Card value={getValues(deaths)} label="Total de óbitos no país! " color="#be1105"/>
          </Grid>   
         <Grid item xs={12} md={3}>
          <Card value={getValues(recovered)} label="Numero de sobrevivente no país! " color="#00d1e0"/>
          </Grid>   
         </Grid>

    )
}
export default memo(Board)