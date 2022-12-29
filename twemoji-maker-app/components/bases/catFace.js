import * as React from "react";
import Svg, { Path, G,} from 'react-native-svg';

function CatFace(props){
    var h = props.h ?? '43'
    var s = props.s ?? '100'
    var l = props.l ?? '65'
    var color1 = 'hsl('+h+','+s+'%,'+l+'%)'

    return (
        // Using react-natives built in components.
        <G key="cat-face" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp} totalColors="1" >
            <Path fill="#FFCC4D" d="M35.734 19.929C35.375 16.66 35 15 34 13c0 0 3-9 1-12.7c-.674-1.246-7.404 1.688-10 3.7c0 0-4-.998-7-.998S11 4 11 4C8.404 1.988 1.674-.946 1 .3C-1 4 2 13 2 13C1 15 .625 16.66.266 19.929C-.129 23.513.657 26.37 1 27c.39.716 2.367 3.025 5 5c4 3 10 4 12 4s8-1 12-4c2.633-1.975 4.61-4.284 5-5c.343-.63 1.129-3.487.734-7.071z"/>
            <Path fill="#F18F26" d="M2 3c.447-1.342 5.64 1 6.64 2C8.64 5 4 8 3 11c0 0-2-5-1-8zm32 0c-.447-1.342-5.64 1-6.64 2c0 0 4.64 3 5.64 6c0 0 2-5 1-8z"/>
            <Path fill="#FFCC4D" d="M4.934 5.603C4.934 4.189 11 7 10 8s-2 1.603-3 2.603s-2.066-4-2.066-5zm26.132 0C31.066 4.189 25 7 26 8s2 1.603 3 2.603s2.066-4 2.066-5z"/>
        </G>
    );
}


export default CatFace