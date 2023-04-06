import React from 'react'
import { Text } from 'react-native'
import { PRIMARY_TEXT_COLOR, TEXTURE_PURPLE } from '../../constants/colors'
import Bank from '../../svgs/Bank'
import PiggyBank from '../../svgs/PiggyBank'
import StatisticsIcon from '../../svgs/StatisticsIcon'
import Wallet from '../../svgs/Wallet'
import { IDashboradCard } from '../../types/globalTypes'

export const CARDS_DATA: IDashboradCard[] = [
    {
        id: 1,
        icon: <StatisticsIcon color={TEXTURE_PURPLE} />,
        title: (
            <Text style={{ color: 'red', fontSize: 16 }}>Unavailable</Text>
        ),
        subtitle: 'Paid',
    },
    {
        id: 2,
        icon: <Wallet color={TEXTURE_PURPLE} />,
        title: (
            <Text style={{ color: 'red', fontSize: 16 }}>Unavailable</Text>
        ),
        subtitle: 'Due',
    },
    {
        id: 3,
        icon: <PiggyBank color={TEXTURE_PURPLE} />,
        title: <Text style={{ fontSize: 16 }}>€ 1,230.00</Text>,
        subtitle: 'Advance Payment',
    },
    {
        id: 4,
        icon: <Bank color={TEXTURE_PURPLE} />,
        title: <Text style={{ fontSize: 16 }}>€ 340.59</Text>,
        subtitle: 'Modularity',
    },
]
