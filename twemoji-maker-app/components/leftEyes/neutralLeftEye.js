import * as React from "react";
import Svg, { Ellipse, G,} from 'react-native-svg';

function NeutralLeftEye(props){
    var color1 = props.color1 ?? 'rgb(102,69,0)';

return (
	// Using react-natives built in components.
	<G key="neutral-left-eye" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp} totalColors="1" >
        <Ellipse cx="11.5" cy="16.5" fill={color1} rx="2.5" ry="3.5"/>
    </G>
);
}

export default NeutralLeftEye