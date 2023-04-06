import { Dimensions, StyleSheet } from 'react-native'
const { height, width } = Dimensions.get('window')
export const styles = StyleSheet.create({
    image: {
        display: 'flex',
        marginTop: height / 2.4,
        marginLeft: width / 6.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
