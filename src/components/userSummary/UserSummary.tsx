import React from 'react'
import { Text, View } from 'react-native'
import { Card } from 'react-native-paper'
import { PRIMARY_TEXT_COLOR } from '../../constants/colors'
import User from '../../svgs/User'
import InfoBox from './InfoBox'
import { styles } from './userSummaryStyles'

function UserSummary() {
    return (
        <Card style={styles.cardcontainer}>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <User color={PRIMARY_TEXT_COLOR} />
                <Text
                    style={{
                        marginLeft: 4,
                        fontSize: 15,
                        color: PRIMARY_TEXT_COLOR,
                        fontWeight: '700',
                    }}
                >
                    User Summary
                </Text>
            </View>
            <View style={styles.infoContainer}>
                <InfoBox
                    title="status"
                    value="Subscribed"
                    containerStyle={{ width: '50%' }}
                />
                <InfoBox
                    title="Birthday"
                    value="26/01/1994"
                    containerStyle={{ width: '50%' }}
                />
            </View>
            <View style={styles.infoContainer}>
                <InfoBox
                    title="City"
                    value="Barcelona"
                    containerStyle={{ width: '50%' }}
                />
                <InfoBox
                    title="Country"
                    value="ES"
                    containerStyle={{ width: '25%' }}
                />
                <InfoBox title="Number" value="100" />
            </View>
        </Card>
    )
}

export default UserSummary
