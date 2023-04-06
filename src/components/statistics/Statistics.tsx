import React from 'react'
import { View, Text } from 'react-native'
import StatisticCard from './StatisticCard'
import { CARDS_DATA } from './statisticMetaData'
import { styles } from './statisticsStyles'

function Statistics() {
    return (
        <View style={styles.statisticsContainer}>
            <View>
                <Text style={styles.heading}>Contributions of 2022</Text>
            </View>
            <View style={styles.statisticCardContainer}>
                {CARDS_DATA.map((card) => (
                    <StatisticCard key={card.id} {...card} />
                ))}
            </View>
        </View>
    )
}

export default Statistics
