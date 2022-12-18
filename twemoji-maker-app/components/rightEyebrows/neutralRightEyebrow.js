import * as React from "react";
import Svg, { Path, G,} from 'react-native-svg';

function NeutralRightEyebrow(props){
    //var h = props.h ?? '41'
    //var s = props.s ?? '100'
    //var l = props.l ?? '20'
    var h = '41'
    var s = '100'
    var l = '20'
    var color1 = 'hsl('+h+','+s+'%,'+l+'%)'

return (
	// Using react-natives built in components.
	<G key="neutral-right-eyebrow" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp} totalColors="1" >
        <Path fill={color1} d="M29.001 13a.998.998 0 0 1-.801-.4c-2.592-3.456-6.961-2.628-7.004-2.62a.998.998 0 0 1-1.177-.784a1.001 1.001 0 0 1 .784-1.177c.231-.047 5.657-1.072 8.996 3.38A1 1 0 0 1 29.001 13z"/>
    </G>
);
}

export default NeutralRightEyebrow