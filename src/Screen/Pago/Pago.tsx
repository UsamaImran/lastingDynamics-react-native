import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import CommonHeader from '../../components/commonHeader/CommonHeader'
import PagoIcon from '../../svgs/PagoIcon'
import PagoList from './PagoList'
import { styles } from './pagoStyles'

function Pago() {
    return (
        <View style={styles.pagoContainer}>
            <SafeAreaView style={styles.topContainer}>
                <CommonHeader />
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 20,
                        marginTop: 35,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 25,
                            fontWeight: '600',
                            color: 'white',
                        }}
                    >
                        Tax payments
                    </Text>
                    <PagoIcon color="white" />
                </View>
            </SafeAreaView>

            <View>
                <PagoList />
            </View>
        </View>
    )
}

export default Pago
