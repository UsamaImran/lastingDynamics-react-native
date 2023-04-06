import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { ISvg } from '../types/globalTypes'

const SvgComponent: React.FC<ISvg> = ({ color }) => {
    return (
        <Svg width={29} height={28} viewBox="0 0 29 28" fill="none">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.2 2.333h8.824c.65 0 1.27.271 1.712.748l5.176 5.59c.4.432.621.998.621 1.586v13.076a2.333 2.333 0 01-2.333 2.334h-14a2.333 2.333 0 01-2.333-2.334V4.667A2.333 2.333 0 017.2 2.333zm8.824 2.334H7.2v18.666h14V10.257l-5.176-5.59z"
                fill={color}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.533 19.833c0-.644.523-1.166 1.167-1.166h7a1.167 1.167 0 010 2.333h-7a1.167 1.167 0 01-1.167-1.167zM9.533 16.333c0-.644.523-1.166 1.167-1.166h7a1.167 1.167 0 010 2.333h-7a1.167 1.167 0 01-1.167-1.167zM15.367 2.333c.644 0 1.166.523 1.166 1.167v5.833h5.834a1.167 1.167 0 110 2.334h-5.834A2.333 2.333 0 0114.2 9.333V3.5c0-.644.522-1.167 1.167-1.167z"
                fill={color}
            />
        </Svg>
    )
}

export default SvgComponent
