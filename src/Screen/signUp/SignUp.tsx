import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { Paragraph, Title } from 'react-native-paper'
import { styles } from './signUpStyles'

function SignUp() {
    const navigation = useNavigation()
    return (
        <View style={styles.signUpContainer}>
            <View style={styles.imageContainer}>
                <View style={styles.imageSubContainer}>
                    <Image
                        source={require('../../assets/images/Frame.png')}
                        style={styles.imageStyles}
                    />
                    <Text style={styles.heading}>Save your money</Text>
                    <Paragraph style={styles.subHheading}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Est in quis erat a sit.
                    </Paragraph>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        //@ts-ignore
                        navigation.navigate('BottomTabScreen')
                    }}
                >
                    <Paragraph style={styles.buttonText}>
                        Join for free
                    </Paragraph>
                </TouchableOpacity>
                <Paragraph style={styles.link}>
                    Don't have SPID or CIE? Find out more
                </Paragraph>
            </View>
        </View>
    )
}

export default SignUp
