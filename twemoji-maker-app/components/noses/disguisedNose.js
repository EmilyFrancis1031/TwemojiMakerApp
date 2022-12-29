import * as React from "react";
import Svg, { Path, G,} from 'react-native-svg';

function DisguisedNose(props){
    //var h = props.h ?? '41'
    //var s = props.s ?? '100'
    //var l = props.l ?? '20'
    var h = '34'
    var s = '91'
    var l = '50'
    var color1 = 'hsl('+h+','+s+'%,'+l+'%)'

return (
	// Using react-natives built in components.
	<G key="disguised-nose" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp} totalColors="1" >
    <Path fill="#FFAC33" d="M24 23.6c0-.994-1.254-2.6-2.8-2.6l-.023.001C20.977 17.3 19.489 11.8 18 11.8c-1.463 0-2.924 5.477-3.165 9.202L14.8 21c-1.546 0-2.8 1.606-2.8 2.6c0 .93 2.103 1.346 3.684 2.051c.505.438 1.253.549 2.316.549c.901 0 1.577-.107 2.069-.432C21.668 24.989 24 24.58 24 23.6z"/>
    <Path fill="#C1694F" d="M21.2 23.8c-.218.039.055-.4.055-1.489c0-.511-.055-.911-.055-1.311c.4 0 .842 0 .842 1.169c0 .663-.624 1.592-.842 1.631zm-6.443 0c.218.039-.055-.4-.055-1.489c0-.511.055-.911.055-1.311c-.4 0-.842 0-.842 1.169c.001.663.625 1.592.842 1.631z"/>
    <Path fill="#662113" d="M14.403 24.351c-.622-.181-1.203-.081-1.481.203c.721.355 1.739.66 2.631 1.043l.002-.002c.134-.462-.381-1.02-1.152-1.244zm7.194 0c-.771.225-1.286.782-1.151 1.244l.004.005c.891-.383 1.909-.689 2.63-1.044c-.278-.286-.86-.387-1.483-.205z"/>
    </G>
);
}

export default DisguisedNose