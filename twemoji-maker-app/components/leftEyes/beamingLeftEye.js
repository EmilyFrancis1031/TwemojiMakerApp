import * as React from "react";
import Svg, { Path, G,} from 'react-native-svg';

function BeamingLeftEye(props){
    //var h = props.h ?? '41'
    //var s = props.s ?? '100'
    //var l = props.l ?? '20'
    var h = '41'
    var s = '100'
    var l = '20'
    var color1 = 'hsl('+h+','+s+'%,'+l+'%)'

return (
	// Using react-natives built in components.
	<G key="beaming-left-eye" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp} totalColors="1" >
        <Path fill="#664500" d="M16 18c-.419 0-.809-.265-.949-.684C14.848 16.717 14.034 15 13 15c-1.062 0-1.888 1.827-2.051 2.316a1 1 0 1 1-1.897-.633C9.177 16.307 10.356 13 13 13s3.823 3.307 3.949 3.684A1 1 0 0 1 16 18z"/>
    </G>
);
}

export default BeamingLeftEye