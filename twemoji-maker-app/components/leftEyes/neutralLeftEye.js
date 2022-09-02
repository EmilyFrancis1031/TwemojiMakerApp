import * as React from "react";
import Svg, { Ellipse, G,} from 'react-native-svg';

function NeutralLeftEye(props){
    var h = props.h ?? '41'
    var s = props.s ?? '100'
    var l = props.l ?? '20'
    var color1 = 'hsl('+h+','+s+'%,'+l+'%)'

return (
	// Using react-natives built in components.
	<G key="neutral-left-eye" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp} totalColors="1" >
        <Ellipse cx="11.5" cy="16.5" fill={color1} rx="2.5" ry="3.5"/>
    </G>
);
}

export default NeutralLeftEye