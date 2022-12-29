import * as React from "react";
import Svg, { Path, G,} from 'react-native-svg';

function ConfoundedRightEye(props){
    //var h = props.h ?? '41'
    //var s = props.s ?? '100'
    //var l = props.l ?? '20'
    var h = '41'
    var s = '100'
    var l = '20'
    var color1 = 'hsl('+h+','+s+'%,'+l+'%)'

return (
	// Using react-natives built in components.
	<G key="confounded-right-eye" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp} totalColors="1" >
        <Path fill="#664500" d="M6 13zm24 0zM6.001 22zm23.998-.001a.998.998 0 0 1-.598-.198C29.363 21.772 25.59 19 21 19a.999.999 0 0 1-.707-1.707C23.549 14.038 28.779 14 29 14a1 1 0 0 1 .002 2c-.036 0-2.783.027-5.258 1.268c3.905.75 6.713 2.825 6.855 2.933a1 1 0 0 1-.6 1.798z"/>
    </G>
);
}

export default ConfoundedRightEye