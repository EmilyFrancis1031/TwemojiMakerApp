import * as React from "react";
import Svg, { Path, G,} from 'react-native-svg';

function BeamingSmile(props){
    /*var h = props.h ?? '41'
    var s = props.s ?? '100'
    var l = props.l ?? '20'*/
    var h = '41'
    var s = '100'
    var l = '20'
    var color1 = 'hsl('+h+','+s+'%,'+l+'%)'

return (
	// Using react-natives built in components.
	<G key="beaming-smile" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp} totalColors="1" >
        <Path fill="#664500" d="M16 18zm10 0zm-8 4c-3.623 0-6.027-.422-9-1c-.679-.131-2 0-2 2c0 4 4.595 9 11 9c6.404 0 11-5 11-9c0-2-1.321-2.132-2-2c-2.973.578-5.377 1-9 1z"/>
        <Path fill="#FFF" d="M9 23s3 1 9 1s9-1 9-1s-1.344 6.75-9 6.75S9 23 9 23z"/>
        <Path fill="#664500" d="M18 27.594c-3.596 0-6.272-.372-7.937-.745l-.825-1.871c.823.312 3.889.897 8.763.897c4.954 0 8.037-.616 8.864-.938l-.701 1.842c-1.634.38-4.419.815-8.164.815z"/>
        
   </G>
);
}

export default BeamingSmile