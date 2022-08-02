import * as React from "react";
import Svg, { Ellipse, G,} from 'react-native-svg';

function NeutralRightEye(props){

return (
	// Using react-natives built in components.
	<G key="neutral-right-eye" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp} totalColors="1" >
        <Ellipse cx="24.5" cy="16.5" fill={props.color1} rx="2.5" ry="3.5"/>
    </G>
);
}

NeutralRightEye.defaultProps = {
    scaleProp: '1',
    xProp: '0',
    yProp: '0',
    rProp: '0',
    color1: 'rgb(102,69,0)',
    origColors: ['rgb(102,69,0)'],
    type: 'right-eye'
}

export default NeutralRightEye