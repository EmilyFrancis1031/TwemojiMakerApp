import * as React from "react";
import Svg, { Path, G,} from 'react-native-svg';

function NeutralLeftEyebrow(props){
    //var h = props.h ?? '41'
    //var s = props.s ?? '100'
    //var l = props.l ?? '20'
    var h = '41'
    var s = '100'
    var l = '20'
    var color1 = 'hsl('+h+','+s+'%,'+l+'%)'

return (
	// Using react-natives built in components.
	<G key="neutral-left-eyebrow" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp} totalColors="1" >
        <Path fill={color1} d="M6.999 13a1 1 0 0 1-.799-1.6c3.339-4.454 8.766-3.426 8.996-3.38a1.001 1.001 0 0 1-.39 1.962C14.62 9.947 10.37 9.174 7.8 12.6a.998.998 0 0 1-.801.4z"/>
    </G>
);
}

export default NeutralLeftEyebrow