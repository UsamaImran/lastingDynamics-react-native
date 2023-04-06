import React from 'react'
import { Image, StatusBar, View } from 'react-native'
import { styles } from './logoStyles'

function Logo() {
    return (
        <View>
            <StatusBar />
            <View>
                <Image
                    source={require('../../assets/images/LogoCompleto.png')}
                    style={styles.image}
                />
            </View>
        </View>
    )
}

export default Logo
