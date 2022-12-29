import * as React from "react";
import Svg, { Circle, G,} from 'react-native-svg';

function ClownNose(props){
    //var h = props.h ?? '41'
    //var s = props.s ?? '100'
    //var l = props.l ?? '20'
    var h = '34'
    var s = '91'
    var l = '50'
    var color1 = 'hsl('+h+','+s+'%,'+l+'%)'

return (
	// Using react-natives built in components.
	<G key="clown-nose" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp} totalColors="1" >
    <Circle cx="18.5" cy="19.5" r="3.5" fill="#BB1A34"/>
    </G>
);
}

export default ClownNose