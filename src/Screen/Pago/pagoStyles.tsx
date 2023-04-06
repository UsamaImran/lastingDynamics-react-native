import { Dimensions, StyleSheet } from 'react-native'
import {
    GRAY_COLOR,
    LIGHT_PURPLE,
    MAGENTA,
    PRIMARY_TEXT_COLOR,
} from '../../constants/colors'

const { height } = Dimensions.get('window')

export const styles = StyleSheet.create({
    pagoContainer: {
        backgroundColor: LIGHT_PURPLE,
        height,
    },
    topContainer: {
        backgroundColor: MAGENTA,
        height: 200,
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28,
        paddingHorizontal: 16,
    },
    userSummaryContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    listContainer: { paddingHorizontal: 20, marginVertical: 25 },
    heading: { color: PRIMARY_TEXT_COLOR, fontSize: 27, fontWeight: '700' },
    subHeading: { color: GRAY_COLOR, fontSize: 15, marginVertical: 15 },
    cardItemContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowOpacity: 0.1,
        padding: 10,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 2,
    },
    loaderContainer: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
