import * as React from "react";
import Svg, { Path, G,} from 'react-native-svg';

function NeutralFace(props){
    var h = props.h ?? '43'
    var s = props.s ?? '100'
    var l = props.l ?? '65'
    var color1 = 'hsl('+h+','+s+'%,'+l+'%)'

    return (
        // Using react-natives built in components.
        <G key="neutral-face" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp} totalColors="1" >
            <Path fill={color1} d="M36 18c0 9.941-8.059 18-18 18c-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"/>
        </G>
    );
}


export default NeutralFace