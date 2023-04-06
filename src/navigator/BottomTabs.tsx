import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TAB_SCREENS } from './screensMetaData'

import { TEXTURE_PURPLE } from '../constants/colors'
import { StyleProp, Text, View, ViewStyle } from 'react-native'

const Tab = createBottomTabNavigator()

function BottomTabs() {
    return (
        <Tab.Navigator>
            {TAB_SCREENS.map((tab) => {
                return (
                    <Tab.Screen
                        key={tab.name}
                        name={tab.name}
                        component={tab.component}
                        options={{
                            ...tab.options,
                            tabBarIcon: ({ focused }) => {
                                return (
                                    <View
                                        style={getContainerStyles(focused)}
                                    >
                                        <tab.icon
                                            color={getIconStyles(focused)}
                                        />
                                        <Text
                                            style={getLabelStyles(focused)}
                                        >
                                            {tab.name}
                                        </Text>
                                    </View>
                                )
                            },
                            tabBarLabelStyle: getTabBarLabelStyle(),
                        }}
                    />
                )
            })}
        </Tab.Navigator>
    )
}

export default BottomTabs

const getContainerStyles = (focused: boolean) => {
    return {
        borderTopColor: focused ? TEXTURE_PURPLE : 'transparent',
        borderTopWidth: focused ? 3 : 0,
        display: 'flex',
        alignItems: 'center',
    } as StyleProp<ViewStyle>
}

const getIconStyles = (focused: boolean) => {
    return focused ? TEXTURE_PURPLE : 'gray'
}

const getLabelStyles = (focused: boolean) => {
    return {
        fontSize: 12,
        color: focused ? TEXTURE_PURPLE : 'gray',
    } as StyleProp<ViewStyle>
}

const getTabBarLabelStyle = () =>
    ({ display: 'none' } as StyleProp<ViewStyle>)
