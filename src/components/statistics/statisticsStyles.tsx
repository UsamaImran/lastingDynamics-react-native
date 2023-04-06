import { StyleSheet } from 'react-native'
import { PRIMARY_TEXT_COLOR } from '../../constants/colors'

export const styles = StyleSheet.create({
    statisticsContainer: {
        paddingHorizontal: 18,
        marginTop: 20,
    },
    heading: {
        color: PRIMARY_TEXT_COLOR,
        fontSize: 23,
        fontWeight: '700',
    },
    cardContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: 168,
        height: 135,
        shadowOpacity: 0.1,
        marginBottom: 19,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    statisticCardContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
})
