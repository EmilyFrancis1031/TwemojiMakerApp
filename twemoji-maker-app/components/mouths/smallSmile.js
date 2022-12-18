import * as React from "react";
import Svg, { Path, G,} from 'react-native-svg';

function SmallSmile(props){
    /*var h = props.h ?? '41'
    var s = props.s ?? '100'
    var l = props.l ?? '20'*/
    var h = '41'
    var s = '100'
    var l = '20'
    var color1 = 'hsl('+h+','+s+'%,'+l+'%)'

return (
	// Using react-natives built in components.
	<G key="small-smile" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp} totalColors="1" >
        <Path fill={color1} d="M29 14.55m-5.747 8.994a.513.513 0 0 0-.597.06c-.01.008-1.013.863-4.657.863c-3.641 0-4.646-.854-4.646-.854a.5.5 0 0 0-.838.475c.01.044 1.144 4.379 5.484 4.379s5.474-4.335 5.485-4.379a.497.497 0 0 0-.231-.544z"/>
   </G>
);
}

export default SmallSmile