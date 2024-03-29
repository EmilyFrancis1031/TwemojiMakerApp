import * as React from "react";
import Svg, { Path, G,} from 'react-native-svg';

function MeltingFace(props){
    var h = props.h ?? '43'
    var s = props.s ?? '100'
    var l = props.l ?? '65'
    var color1 = 'hsl('+h+','+s+'%,'+l+'%)'

    return (
        // Using react-natives built in components.
        <G key="melting-face" scale={props.scaleProp} origin="18, 18" x={props.xProp} y={props.yProp} rotation={props.rProp} totalColors="1" >
            <Path fill="#FFCC4D" d="M35.07 32.558a1.92 1.92 0 0 0 .836-2.241c-.259-.81-1.07-1.317-1.921-1.317H32a1 1 0 0 1 0-2h1.5a1.5 1.5 0 1 0-.04-3c-.8.021-1.46-.623-1.46-1.423v-.003c0-.293.06-.578.176-.847a15.294 15.294 0 0 0 1.294-7.191C32.978 6.66 26.411.269 18.524.009C9.724-.281 2.5 6.766 2.5 15.5c0 2.371.548 4.609 1.5 6.619v1.88c0 1.086-.865 2.021-1.951 2a2 2 0 0 0-2.034 2.167C.101 29.225 1.069 30 2.133 30h8.039A1.17 1.17 0 0 1 11 32l-3.03.757a1.281 1.281 0 0 0 0 2.485c1.932.483 3.914.737 5.905.756l2.712.026c1.406.014 2.803-.31 4.029-1a8.289 8.289 0 0 1 5.642-.913c3.028.588 6.167.034 8.812-1.553z"/>
        </G>
    );
}


export default MeltingFace