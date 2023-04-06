import React from 'react'
import { View, SafeAreaView, Text } from 'react-native'
import CommonHeader from '../../components/commonHeader/CommonHeader'
import Statistics from '../../components/statistics/Statistics'
import UserSummary from '../../components/userSummary/UserSummary'
import Chat from '../../svgs/Chat'
import Pallete from '../../svgs/Pallete'

import { styles } from './dashboardStyles'

function Dashboard() {
    return (
        <View style={styles.dashboardContainer}>
            <SafeAreaView style={styles.topContainer}>
                <CommonHeader />
                <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 25,
                        }}
                    >
                        Hello, John S.
                    </Text>
                    <Text
                        style={{
                            color: 'white',
                            marginTop: 5,
                            fontSize: 14,
                        }}
                    >
                        Welcome in Moneylia
                    </Text>
                </View>
            </SafeAreaView>

            <View style={styles.userSummaryContainer}>
                <UserSummary />
            </View>
            <View>
                <Statistics />
            </View>
        </View>
    )
}

export default Dashboard
