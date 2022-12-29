import * as React from "react";
import Svg, { Path, G,} from 'react-native-svg';

function ExpressionlessRightEye(props){
    //var h = props.h ?? '41'
    //var s = props.s ?? '100'
    //var l = props.l ?? '20'
    var h = '41'
    var s = '100'
    var l = '20'
    var color1 = 'hsl('+h+','+s+'%,'+l+'%)'

return (
	// Using react-natives built in components.
	<G key="expressionless-right-eye" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp} totalColors="1" >
        <Path fill="#664500" d="M25 26zm-10-8zm13 0h-7a1 1 0 1 1 0-2h7a1 1 0 1 1 0 2z"/>
    </G>
);
}

export default ExpressionlessRightEye