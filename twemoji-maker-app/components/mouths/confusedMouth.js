import * as React from "react";
import Svg, { Path, G,} from 'react-native-svg';

function ConfusedMouth(props){
    /*var h = props.h ?? '41'
    var s = props.s ?? '100'
    var l = props.l ?? '20'*/
    var h = '41'
    var s = '100'
    var l = '20'
    var color1 = 'hsl('+h+','+s+'%,'+l+'%)'

return (
	// Using react-natives built in components.
	<G key="confused-mouth" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp} totalColors="1" >
       <Path fill="#664500" d="M12 28c2-5 13-5 13-3c0 1-8-1-13 3z"/> 
   </G>
);
}

export default ConfusedMouth