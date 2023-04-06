import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ARROW_GRAY } from '../../constants/colors'
import PagoImg from '../../svgs/PagoImg'
import RightArrow from '../../svgs/RightArrow'
import { styles } from './pagoStyles'
import { Button, Card, Title, Paragraph } from 'react-native-paper'

function PagoListItem({
    item,
}: {
    item: { title: string; date: string; price: string }
}) {
    const navigation = useNavigation()
    return (
        <Card style={{ marginBottom: 5 }}>
            <TouchableOpacity
                style={styles.cardItemContainer}
                onPress={() => {
                    //@ts-ignore
                    navigation.navigate('Payment details')
                }}
            >
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        height: '100%',
                    }}
                >
                    <View style={{ marginLeft: 5 }}>
                        <PagoImg />
                    </View>
                    <View style={{ width: '75%' }}>
                        <Paragraph style={{ fontSize: 12.5 }}>
                            {item?.title}
                        </Paragraph>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: 'auto',
                            }}
                        >
                            <Paragraph
                                style={{
                                    fontSize: 12.5,
                                    color: ARROW_GRAY,
                                }}
                            >
                                {item?.date}
                            </Paragraph>
                            <Paragraph
                                style={{ fontSize: 12.5, color: 'red' }}
                            >
                                {item?.price}
                            </Paragraph>
                        </View>
                    </View>
                </View>
                <View>
                    <RightArrow color={ARROW_GRAY} />
                </View>
            </TouchableOpacity>
        </Card>
    )
}

export default PagoListItem
