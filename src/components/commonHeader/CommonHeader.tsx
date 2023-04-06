import React from 'react'
import { View } from 'react-native'
import Chat from '../../svgs/Chat'
import Pallete from '../../svgs/Pallete'

const CommonHeader = () => {
    return (
        <View
            style={{
                paddingHorizontal: 20,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                paddingTop: 20,
            }}
        >
            <Pallete color="white" />
            <Chat color="white" />
        </View>
    )
}

export default CommonHeader
