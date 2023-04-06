import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { ISvg } from '../types/globalTypes'

const SvgComponent: React.FC<ISvg> = ({ color }) => {
    return (
        <Svg width={33} height={32} viewBox="0 0 33 32" fill="none">
            <Path
                d="M28.25 13.333A1.334 1.334 0 0029.583 12V8a1.332 1.332 0 00-.911-1.264l-12-4a1.336 1.336 0 00-.844 0l-12 4A1.332 1.332 0 002.917 8v4a1.333 1.333 0 001.333 1.333h1.333v9.58a3.993 3.993 0 00-2.666 3.754v2.666a1.333 1.333 0 001.333 1.334h24a1.332 1.332 0 001.333-1.334v-2.666a3.993 3.993 0 00-2.666-3.755v-9.579h1.333zM26.917 28H5.583v-1.333a1.335 1.335 0 011.334-1.334h18.666a1.334 1.334 0 011.334 1.334V28zM8.25 22.667v-9.334h2.667v9.334H8.25zm5.333 0v-9.334h5.334v9.334h-5.334zm8 0v-9.334h2.667v9.334h-2.667zm-16-12V8.96L16.25 5.405l10.667 3.556v1.706H5.583z"
                fill={color}
            />
        </Svg>
    )
}

export default SvgComponent
