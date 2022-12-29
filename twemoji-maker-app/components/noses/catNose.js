import * as React from "react";
import Svg, { Path, G,} from 'react-native-svg';

function CatNose(props){
    //var h = props.h ?? '41'
    //var s = props.s ?? '100'
    //var l = props.l ?? '20'
    var h = '34'
    var s = '91'
    var l = '50'
    var color1 = 'hsl('+h+','+s+'%,'+l+'%)'

return (
	// Using react-natives built in components.
	<G key="cat-nose" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp} totalColors="1" >
    <Path fill="#E75A70" d="M18 19.5c3 0 3 .5 3 1.5s-1.5 3-3 3s-3-2-3-3s-.001-1.5 3-1.5z"/>
    </G>
);
}

export default CatNose