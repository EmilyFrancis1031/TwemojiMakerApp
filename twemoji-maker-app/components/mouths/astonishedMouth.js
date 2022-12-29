import * as React from "react";
import Svg, { Ellipse, Path, G,} from 'react-native-svg';

function AstonishedMouth(props){
    /*var h = props.h ?? '41'
    var s = props.s ?? '100'
    var l = props.l ?? '20'*/
    var h = '41'
    var s = '100'
    var l = '20'
    var color1 = 'hsl('+h+','+s+'%,'+l+'%)'

return (
	// Using react-natives built in components.
	<G key="astonished-mouth" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp} totalColors="1" >
        <Ellipse cx="18" cy="27" fill="#664500" rx="5" ry="6"/>
        <Path fill="#F5F8FA" d="M18 23c-1.657 0-3 1.79-3 4h6c0-2.21-1.343-4-3-4z"/>
   </G>
);
}

export default AstonishedMouth