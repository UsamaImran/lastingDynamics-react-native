import React from 'react'
import { View, Text } from 'react-native'
import { Card, Paragraph } from 'react-native-paper'
import { IDashboradCard } from '../../types/globalTypes'
import { styles } from './statisticsStyles'

const StatisticCard: React.FC<IDashboradCard> = ({
    icon,
    title,
    subtitle,
}) => {
    return (
        <Card
            style={{
                ...styles.cardContainer,
            }}
        >
            <View style={styles.cardContainer}>
                <View>{icon}</View>
                <View>
                    <Paragraph style={{ color: 'gray', fontSize: 13 }}>
                        {subtitle}
                    </Paragraph>
                </View>
                <View>{title}</View>
            </View>
        </Card>
    )
}

export default StatisticCard
