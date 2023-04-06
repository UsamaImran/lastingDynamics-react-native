import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { STACK_SCREENS } from './screensMetaData'

const Stack = createNativeStackNavigator()

function CustomStackNavigator() {
    return (
        <Stack.Navigator>
            {STACK_SCREENS.map((screen) => (
                <Stack.Screen
                    key={screen.name}
                    name={screen.name}
                    component={screen.component}
                    options={
                        {
                            ...screen.options,
                            ...getCommonOptions(),
                        } as never
                    }
                />
            ))}
        </Stack.Navigator>
    )
}

export default CustomStackNavigator

const getCommonOptions = () => ({
    headerBackTitle: '',
    headerTintColor: 'white',
    headerTitleStyle: { fontWeight: '300' },
})
