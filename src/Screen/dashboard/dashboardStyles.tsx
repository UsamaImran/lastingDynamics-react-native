import { Dimensions, StyleSheet } from 'react-native'
import { LIGHT_PURPLE } from '../../constants/colors'

const { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    dashboardContainer: {
        backgroundColor: LIGHT_PURPLE,
        height,
    },
    topContainer: {
        backgroundColor: '#7476ED',
        height: 315,
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28,
        paddingHorizontal: 16,
    },
    userSummaryContainer: {
        display: 'flex',
        alignItems: 'center',
    },
})
