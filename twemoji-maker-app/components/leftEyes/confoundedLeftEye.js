import * as React from "react";
import Svg, { Path, G,} from 'react-native-svg';

function ConfoundedLeftEye(props){
    //var h = props.h ?? '41'
    //var s = props.s ?? '100'
    //var l = props.l ?? '20'
    var h = '41'
    var s = '100'
    var l = '20'
    var color1 = 'hsl('+h+','+s+'%,'+l+'%)'

return (
	// Using react-natives built in components.
	<G key="confounded-left-eye" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp} totalColors="1" >
        <Path fill="#664500" d="M6 13zm24 0zM6.001 22a1 1 0 0 1-.601-1.799c.143-.107 2.951-2.183 6.856-2.933C9.781 16.027 7.034 16 6.999 16A1.001 1.001 0 0 1 7 14c.221 0 5.452.038 8.707 3.293A1 1 0 0 1 15 19c-4.613 0-8.363 2.772-8.4 2.8a.996.996 0 0 1-.599.2z"/>
    </G>
);
}

export default ConfoundedLeftEye