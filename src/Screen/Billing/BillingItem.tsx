import React from 'react'
import { Text, View } from 'react-native'
import HorizontalLine from '../../components/horizontalLine/horizontalLine'

import { styles } from './billingStyles'

function BillingItem({ item }: { item: { title: string; value: string } }) {
    return (
        <View style={styles.billItemContainer}>
            <HorizontalLine />
            <View
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: 15,
                }}
            >
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.value}>{item.value}</Text>
            </View>
        </View>
    )
}

export default BillingItem
