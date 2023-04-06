import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './billingStyles'
import PagoImg from '../../svgs/PagoImg'
import { BILLING_DATA } from './billingMetaData'
import BillingItem from './BillingItem'

function Billing() {
    return (
        <View>
            <View style={styles.billingContainer}>
                <View style={{ paddingHorizontal: 20 }}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.paymentNotice}>
                            Payment Notice
                        </Text>
                        <PagoImg />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        {BILLING_DATA.map((item, index) => (
                            <BillingItem item={item} key={index} />
                        ))}
                    </View>
                </View>

                <View style={styles.billingButtonContainer}>
                    <View style={{ paddingHorizontal: 20 }}>
                        <View style={styles.billContainer}>
                            <Text
                                style={{ fontSize: 20, fontWeight: '600' }}
                            >
                                Total due
                            </Text>
                            <Text style={{ color: 'red', fontSize: 20 }}>
                                € 1,234.99
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.billingButton}>
                            <Text style={styles.buttonText}>Pay now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Billing
