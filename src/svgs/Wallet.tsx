import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { ISvg } from '../types/globalTypes'

const SvgComponent: React.FC<ISvg> = ({ color }) => {
    return (
        <Svg width={33} height={32} viewBox="0 0 33 32" fill="none">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.917 8a2.667 2.667 0 012.666-2.667h21.334A2.667 2.667 0 0129.583 8v16a2.667 2.667 0 01-2.666 2.667H5.583A2.667 2.667 0 012.917 24V8zm24 0H5.583v16h21.334V8z"
                fill={color}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.25 20c0-.736.597-1.333 1.333-1.333h5.334a1.333 1.333 0 010 2.666H9.583A1.333 1.333 0 018.25 20zM2.917 14.667c0-.737.597-1.334 1.333-1.334h24a1.333 1.333 0 010 2.667h-24a1.333 1.333 0 01-1.333-1.333zM2.917 12c0-.736.597-1.333 1.333-1.333h24a1.333 1.333 0 110 2.666h-24A1.333 1.333 0 012.917 12z"
                fill={color}
            />
        </Svg>
    )
}

export default SvgComponent
