import { Dimensions, StyleSheet } from 'react-native'
import {
    DARK_GRAY,
    LIGHT_GRAY,
    MAGENTA,
    PRIMARY_TEXT_COLOR,
} from '../../constants/colors'

export const styles = StyleSheet.create({
    billingContainer: {
        display: 'flex',
        height: '93%',
        marginTop: 30,
    },
    headerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    billingButtonContainer: {
        marginTop: 'auto',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        shadowOpacity: 0.1,
        elevation: 2,
        backgroundColor: 'white',
    },
    billingButton: {
        backgroundColor: MAGENTA,
        height: 55,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
    },
    billContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    billItemContainer: {
        paddingVertical: 15,
        display: 'flex',
    },
    title: {
        color: DARK_GRAY,
        fontSize: 17,
        fontWeight: '600',
        marginBottom: 5,
    },
    value: {
        color: LIGHT_GRAY,
    },
    paymentNotice: {
        fontSize: 25,
        color: PRIMARY_TEXT_COLOR,
        fontWeight: '600',
        marginTop: 5,
    },
})
