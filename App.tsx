import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import Logo from './src/components/logo/Logo'
import Navigation from './src/navigator'
import CustomStackNavigator from './src/navigator/StackNavigator'
import { Provider as PaperProvider } from 'react-native-paper'

const App = () => {
    const [displaySplash, setDisplaySplash] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setDisplaySplash(false)
        }, 3000)
    }, [])

    return (
        <PaperProvider>
            <StatusBar barStyle="light-content" />
            {displaySplash ? (
                <Logo />
            ) : (
                <Navigation>
                    <CustomStackNavigator />
                </Navigation>
            )}
        </PaperProvider>
    )
}

export default App
