import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    cardcontainer: {
        backgroundColor: 'white',
        width: 350,
        height: 200,
        marginTop: -110,
        borderRadius: 20,
        padding: 30,
        display: 'flex',
        justifyContent: 'space-between',
        shadowOpacity: 0.1,
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    infoBoxContainer: { shadowOpacity: 0.4 },
    titleStyle: {
        color: '#6F6D7B',
        fontSize: 13,
    },
    valueStyle: {
        fontSize: 16,
        color: '#312E43',
    },
})
