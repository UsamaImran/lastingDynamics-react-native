import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { ISvg } from '../types/globalTypes'

const SvgComponent: React.FC<ISvg> = ({ color }) => {
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 7a4 4 0 100 8 4 4 0 000-8zm-2 4a2 2 0 114 0 2 2 0 01-4 0z"
                fill={color}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-8a8 8 0 00-5.292 14A7.972 7.972 0 0112 16c2.029 0 3.882.756 5.291 2A8 8 0 0012 4zm0 16c-1.278 0-2.486-.3-3.557-.832A5.97 5.97 0 0112 18c1.332 0 2.561.433 3.557 1.168A7.967 7.967 0 0112 20z"
                fill={color}
            />
        </Svg>
    )
}

export default SvgComponent
