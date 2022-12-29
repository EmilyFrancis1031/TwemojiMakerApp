import * as React from "react";
import Svg, { Path, G,} from 'react-native-svg';

function ConfoundedMouth(props){
    /*var h = props.h ?? '41'
    var s = props.s ?? '100'
    var l = props.l ?? '20'*/
    var h = '41'
    var s = '100'
    var l = '20'
    var color1 = 'hsl('+h+','+s+'%,'+l+'%)'

return (
	// Using react-natives built in components.
	<G key="confounded-mouth" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp} totalColors="1" >
        <Path fill="#664500" d="M6 13zm24 0zM6.001 22zm23.998-.001zM18 30a1 1 0 0 1-.781-.375l-3.194-3.992L11.8 28.6a.998.998 0 0 1-1.507.107l-1-1a.999.999 0 1 1 1.414-1.414l.185.185L13.2 23.4a.996.996 0 0 1 1.58-.025L18 27.399l3.219-4.024c.193-.241.484-.375.797-.375c.31.005.599.152.784.4l2.309 3.077l.185-.185a.999.999 0 1 1 1.414 1.414l-1 1a.975.975 0 0 1-.778.29a1 1 0 0 1-.729-.397l-2.226-2.967l-3.193 3.992A1.002 1.002 0 0 1 18 30z"/>
        
   </G>
);
}

export default ConfoundedMouth