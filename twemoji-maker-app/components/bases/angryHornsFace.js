import * as React from "react";
import Svg, { Circle, Path, G,} from 'react-native-svg';

function AngryHornsFace(props){
    var h = props.h ?? '263'
    var s = props.s ?? '48'
    var l = props.l ?? '68'
    var color1 = 'hsl('+h+','+s+'%,'+l+'%)'

return (
	// Using react-natives built in components.
	<G key="angry-horns-face" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp}>
        <Circle cx="18" cy="18" r="18" fill={color1}/>
        <Path fill={color1} d="M10 4C7.42 4 4.369 1.534 3.414.586A1.998 1.998 0 0 0 1.235.153A1.998 1.998 0 0 0 0 2c0 3.459 1.672 10 8 10a2 2 0 0 0 1.789-1.106l2-4A1.999 1.999 0 0 0 10 4zM34.766.153a1.996 1.996 0 0 0-2.18.434C31.7 1.472 28.589 4 26 4a1.999 1.999 0 0 0-1.789 2.895l2 4A2 2 0 0 0 28 12c6.328 0 8-6.541 8-10c0-.809-.487-1.538-1.234-1.847z"/>
    </G>
);
}

export default AngryHornsFace