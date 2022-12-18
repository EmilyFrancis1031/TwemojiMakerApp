import * as React from "react";
import Svg, { Path, G,} from 'react-native-svg';

function LyingNose(props){
    //var h = props.h ?? '41'
    //var s = props.s ?? '100'
    //var l = props.l ?? '20'
    var h = '34'
    var s = '91'
    var l = '50'
    var color1 = 'hsl('+h+','+s+'%,'+l+'%)'

return (
	// Using react-natives built in components.
	<G key="lying-nose" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp} totalColors="1" >
        <Path fill={color1} d="M32.262 17.5H17c-1.511 0-2.734 1.344-2.734 3c0 1.657 1.224 3 2.734 3h15.262c1.513 0 2.738-1.343 2.738-3c0-1.656-1.226-3-2.738-3z"/>
    </G>
);
}

export default LyingNose