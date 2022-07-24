import * as React from "react";
import Svg, { Circle, Path, Rect, G, Ellipse} from 'react-native-svg';


function AnxiousFace(props){
   return (
	// Using react-natives built in components.
	<G key="anxious-face" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp}>
        <Path fill={props.color1} d="M36 18c0 9.941-8.059 18-18 18c-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"/>
        <Path fill={props.color2} d="M18 11c8.749 0 16.033 4.509 17.656 10.484c.222-1.128.344-2.292.344-3.484c0-9.94-8.059-18-18-18C8.06 0 0 8.06 0 18c0 1.192.123 2.356.344 3.484C1.967 15.509 9.252 11 18 11z"/>
    </G>
);
}

AnxiousFace.defaultProps = {
    scaleProp: '1',
    xProp: '0',
    yProp: '0',
    rProp: '0',
    color1: 'rgb(255,204,77)',
    color2: 'rgb(189,221,244)',
    origColors: ['rgb(255,204,77)','rgb(189,221,244)'],
    type: 'base'
}

export default AnxiousFace
