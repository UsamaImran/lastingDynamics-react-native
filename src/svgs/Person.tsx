import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { ISvg } from '../types/globalTypes'

const SvgComponent: React.FC<ISvg> = ({ color }) => {
    return (
        <Svg width={29} height={28} viewBox="0 0 29 28" fill="none">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.097 19.838c-1.058.705-1.53 1.552-1.53 2.329a1.167 1.167 0 01-2.334 0c0-1.8 1.095-3.287 2.57-4.27 1.483-.99 3.466-1.564 5.597-1.564 2.131 0 4.113.574 5.597 1.563 1.475.984 2.57 2.47 2.57 4.27a1.167 1.167 0 01-2.334 0c0-.776-.472-1.623-1.53-2.328-1.05-.7-2.568-1.171-4.303-1.171-1.735 0-3.253.47-4.303 1.17zM14.4 5.833a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm-5.833 3.5a5.833 5.833 0 1111.666 0 5.833 5.833 0 01-11.666 0z"
                fill={color}
            />
        </Svg>
    )
}

export default SvgComponent
