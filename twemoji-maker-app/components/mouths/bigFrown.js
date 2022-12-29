import * as React from "react";
import Svg, { Path, G,} from 'react-native-svg';

function BigFrown(props){
    /*var h = props.h ?? '41'
    var s = props.s ?? '100'
    var l = props.l ?? '20'*/
    var h = '41'
    var s = '100'
    var l = '20'
    var color1 = 'hsl('+h+','+s+'%,'+l+'%)'

return (
	// Using react-natives built in components.
	<G key="big-frown" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp} totalColors="1" >
        <Path fill={color1} d="M25.485 29.879C25.44 29.7 24.317 25.5 18 25.5c-6.318 0-7.44 4.2-7.485 4.379a.499.499 0 0 0 .237.554a.507.507 0 0 0 .6-.077c.019-.019 1.954-1.856 6.648-1.856s6.63 1.837 6.648 1.855a.502.502 0 0 0 .598.081a.5.5 0 0 0 .239-.557z"/>
   </G>
);
}

export default BigFrown