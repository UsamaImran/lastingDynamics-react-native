import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = (props: any) => (
    <Svg width={48} height={1} {...props}>
        <Path d="M0 0h48v1H0z" fill="#063855" fillRule="evenodd" />
    </Svg>
)

export default SvgComponent
