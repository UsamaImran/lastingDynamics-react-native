import { Dimensions, StyleSheet } from 'react-native'
import {
    GRAY_COLOR,
    PRIMARY_TEXT_COLOR,
    TEXTURE_PURPLE,
} from '../../constants/colors'

const { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    heading: {
        color: PRIMARY_TEXT_COLOR,
        fontSize: 34,
        fontWeight: '700',
        marginTop: 30,
    },
    subHheading: {
        color: GRAY_COLOR,
        paddingHorizontal: 55.5,
        lineHeight: 21,
        fontSize: 15,
        marginTop: 10,
    },
    button: {
        backgroundColor: TEXTURE_PURPLE,
        width: 260,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 3,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
    },
    signUpContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: height,
    },
    imageSubContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    link: {
        color: PRIMARY_TEXT_COLOR,
        textDecorationLine: 'underline',
        marginTop: 30,
        fontSize: 15,
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: { display: 'flex', alignItems: 'center' },
    imageStyles: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
