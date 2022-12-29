import * as React from "react";
import Svg, { Ellipse, G,} from 'react-native-svg';

function GaspingMouth(props){
    /*var h = props.h ?? '41'
    var s = props.s ?? '100'
    var l = props.l ?? '20'*/
    var h = '41'
    var s = '100'
    var l = '20'
    var color1 = 'hsl('+h+','+s+'%,'+l+'%)'

return (
	// Using react-natives built in components.
	<G key="gasping-mouth" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp} totalColors="1" >
        <Ellipse cx="18" cy="27" fill="#664500" rx="5" ry="6"/>
   </G>
);
}

export default GaspingMouth