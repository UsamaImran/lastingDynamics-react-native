import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { ISvg } from '../types/globalTypes'

const SvgComponent: React.FC<ISvg> = ({ color }) => {
    return (
        <Svg width={33} height={32} viewBox="0 0 33 32" fill="none">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.75 5.333C10.86 5.333 6.083 10.11 6.083 16S10.86 26.667 16.75 26.667 27.417 21.89 27.417 16 22.64 5.333 16.75 5.333zM3.417 16c0-7.364 5.97-13.333 13.333-13.333 7.364 0 13.333 5.97 13.333 13.333 0 7.364-5.97 13.333-13.333 13.333-7.364 0-13.333-5.97-13.333-13.333z"
                fill={color}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.75 2.667c.736 0 1.333.597 1.333 1.333v11.479l7.647 8.283a1.333 1.333 0 01-1.96 1.81l-8-8.668a1.334 1.334 0 01-.353-.904V4c0-.736.597-1.333 1.333-1.333z"
                fill={color}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.417 16c0-.736.597-1.333 1.333-1.333h12a1.333 1.333 0 110 2.666h-12A1.333 1.333 0 0115.417 16z"
                fill={color}
            />
        </Svg>
    )
}

export default SvgComponent
