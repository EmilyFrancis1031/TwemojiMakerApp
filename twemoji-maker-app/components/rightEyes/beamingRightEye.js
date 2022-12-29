import * as React from "react";
import Svg, { Path, G,} from 'react-native-svg';

function BeamingRightEye(props){
    //var h = props.h ?? '41'
    //var s = props.s ?? '100'
    //var l = props.l ?? '20'
    var h = '41'
    var s = '100'
    var l = '20'
    var color1 = 'hsl('+h+','+s+'%,'+l+'%)'

return (
	// Using react-natives built in components.
	<G key="beaming-right-eye" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp} totalColors="1" >
        <Path fill="#664500" d="M16 18zm10 0a.999.999 0 0 1-.948-.684C24.849 16.717 24.033 15 23 15c-1.062 0-1.889 1.827-2.052 2.316a1 1 0 0 1-1.897-.633C19.177 16.307 20.355 13 23 13s3.823 3.307 3.948 3.684A1 1 0 0 1 26 18z"/>
    </G>
);
}

export default BeamingRightEye