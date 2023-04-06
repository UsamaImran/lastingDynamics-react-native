import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'

function Navigation({ children }: { children: React.ReactNode }) {
    return <NavigationContainer>{children}</NavigationContainer>
}

export default Navigation
