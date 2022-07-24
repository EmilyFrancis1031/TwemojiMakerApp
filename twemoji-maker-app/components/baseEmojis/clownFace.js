import * as React from "react";
import Svg, { Circle, Path, G,} from 'react-native-svg';

function ClownFace(props){

return (
	// Using react-natives built in components.
	<G key="clown-face" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp}>
        <Circle cx="29" cy="3" r="2" fill={props.color1}/>
        <Circle cx="33" cy="8" r="3" fill={props.color1}/>
        <Circle cx="33" cy="4" r="3" fill={props.color1}/>
        <Circle cx="7" cy="3" r="2" fill={props.color1}/>
        <Circle cx="3" cy="8" r="3" fill={props.color1}/>
        <Circle cx="3" cy="4" r="3" fill={props.color1}/>
        <Path fill={props.color2} d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18S8.059 0 18 0s18 8.059 18 18"/>
        <Circle cx="30.5" cy="4.5" r="2.5" fill={props.color1}/>
        <Circle cx="32" cy="7" r="2" fill={props.color1}/>
        <Circle cx="5.5" cy="4.5" r="2.5" fill={props.color1}/>
        <Circle cx="4" cy="7" r="2" fill={props.color1}/>


    </G>
);
}

ClownFace.defaultProps = {
    scaleProp: '1',
    xProp: '0',
    yProp: '0',
    rProp: '0',
    color1: 'rgb(66,137,193)',
    color2: 'rgb(254,231,184)',
    origColors: ['rgb(66,137,193)','rgb(254,231,184)'],
    type: 'base'
}

export default ClownFace