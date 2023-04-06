import React from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { Paragraph } from 'react-native-paper'
import { PORT_URL } from '../../endpoints'
import { useFetch } from '../../hooks/useFetch'
import PagoListItem from './PagoListItem'
import { styles } from './pagoStyles'

function PagoList() {
    const { data, error, loading } = useFetch(PORT_URL)
    return (
        <View style={styles.listContainer}>
            <View>
                <Paragraph style={styles.heading}>
                    Movements to pay
                </Paragraph>
            </View>
            <View>
                <Paragraph style={styles.subHeading}>
                    View pending transactions for the past two years and
                    proceed to payment.
                </Paragraph>
            </View>
            <View style={{ overflow: 'scroll', maxHeight: 450 }}>
                {loading || error ? (
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator />
                    </View>
                ) : (
                    <FlatList
                        data={data as []}
                        keyExtractor={(_, index) => index + ''}
                        renderItem={({ item, index }) => (
                            <PagoListItem key={index} item={item} />
                        )}
                    />
                )}
            </View>
        </View>
    )
}

export default PagoList
