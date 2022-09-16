import React from "react"
import {StatisticsThumb,StatisticsItem,StatisticsList} from "./Statistics.styled"
export const Statistics =({good,neutral,bad,total,goodPercent,neutralPercent})=>{
    return(
        <StatisticsThumb>
        <StatisticsItem>
            <StatisticsList>Good:{good}</StatisticsList>
            <StatisticsList>Neutal:{neutral}</StatisticsList>
            <StatisticsList>Bad:{bad}</StatisticsList>
            <StatisticsList>Total:{total}</StatisticsList>
            <StatisticsList>Positive feedback:{goodPercent + neutralPercent}%</StatisticsList>
        </StatisticsItem>
    </StatisticsThumb>
    )
}

