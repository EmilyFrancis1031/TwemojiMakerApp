import * as BaseComponents from '../components/bases/baseComps'
import * as LeftEyeComponents from '../components/leftEyes/leftEyeComps'

export default function getNewEmojiComponent(compName, compProps){
    var newComponent = null;
    var scale = compProps['scale'] ?? '1'
    var rot = compProps['rotation'] ?? '0'
    var x = compProps['x'] ?? '0'
    var y = compProps['y'] ?? '0'
    var h = compProps['h'] ?? null
    var s = compProps['s'] ?? null
    var l = compProps['l'] ?? null

    switch (compName) {
      case 'neutral-face': newComponent = <BaseComponents.NeutralFace type='base' key='neutral-face' color1={color1} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'anxious-face': newComponent = <BaseComponents.AnxiousFace type='base' key='anxious-face' color1={color1} color2={color2} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'clown-face': newComponent = <BaseComponents.ClownFace type='base' key='clown-face' color1={color1} color2={color2} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'angry-horns-face': newComponent = <BaseComponents.AngryHornsFace type='base' key='angry-horns-face' color1={color1} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'neutral-left-eye': newComponent = <LeftEyeComponents.NeutralLeftEye type='left-eye' key='neutral-left-eye' color1={color1} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'pensive-left-eye': newComponent = <LeftEyeComponents.PensiveLeftEye type='left-eye' key='pensive-left-eye' color1={color1} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      default:  newComponent = null;
   }
   return newComponent
}