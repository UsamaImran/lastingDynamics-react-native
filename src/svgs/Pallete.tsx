import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { ISvg } from '../types/globalTypes'

const SvgComponent: React.FC<ISvg> = ({ color }) => {
    return (
        <Svg width={28} height={22} viewBox="0 0 28 22" fill="none">
            <Path
                d="M8.695 19.674c-2.406 2.371-6.48 2.362-7.617-.799a13.487 13.487 0 01.257-9.8A13.709 13.709 0 016.44 2.944 14.001 14.001 0 0114.14.64a14 14 0 017.7 2.303 13.708 13.708 0 015.105 6.133 13.487 13.487 0 01.257 9.8c-1.138 3.16-5.211 3.17-7.617.798l-3.713-3.66c-.354-.35-.317-.927-.22-1.412a1.5 1.5 0 00-.087-.879 1.525 1.525 0 00-.568-.682 1.558 1.558 0 00-1.714 0 1.524 1.524 0 00-.567.682 1.5 1.5 0 00-.088.878c.098.486.134 1.062-.22 1.412l-3.713 3.66z"
                fill={color}
            />
        </Svg>
    )
}

export default SvgComponent
