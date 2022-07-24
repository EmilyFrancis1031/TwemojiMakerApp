import * as React from "react";
import Svg, { Path, G,} from 'react-native-svg';

function PensiveLeftEye(props){

return (
	// Using react-natives built in components.
	<G key="pensive-left-eye" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp} totalColors="1" >
        <Path fill={props.color1} d="M17.312 17.612a.501.501 0 0 0-.61-.014c-.012.009-1.26.902-3.702.902c-2.441 0-3.69-.893-3.7-.9a.5.5 0 0 0-.757.603c.06.135 1.5 3.297 4.457 3.297c2.958 0 4.397-3.162 4.457-3.297a.498.498 0 0 0-.145-.591z"/>
    </G>
);
}

PensiveLeftEye.defaultProps = {
    scaleProp: '1',
    xProp: '0',
    yProp: '0',
    rProp: '0',
    color1: 'rgb(102,69,0)',
    origColors: ['rgb(102,69,0)'],
    type: 'left-eye'
}

export default PensiveLeftEye