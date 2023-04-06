import React from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'
import { styles } from './userSummaryStyles'

export interface IInfoBox {
    title: string
    value: string
    containerStyle?: StyleProp<ViewStyle>
}

const InfoBox: React.FC<IInfoBox> = ({
    title,
    value,
    containerStyle = {},
}) => {
    return (
        <View style={containerStyle}>
            <View style={{ marginBottom: 4 }}>
                <Text style={styles.titleStyle}>{title}</Text>
            </View>
            <View>
                <Text style={styles.valueStyle}>{value}</Text>
            </View>
        </View>
    )
}

export default InfoBox
