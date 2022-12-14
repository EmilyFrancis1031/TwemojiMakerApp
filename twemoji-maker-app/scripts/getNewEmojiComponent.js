import * as BaseComponents from '../components/bases/baseComps'
import * as LeftEyeComponents from '../components/leftEyes/leftEyeComps'
import * as RightEyeComponents from '../components/rightEyes/rightEyeComps'

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
      case 'neutral-face': newComponent = <BaseComponents.NeutralFace type='base' key='neutral-face' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'anxious-face': newComponent = <BaseComponents.AnxiousFace type='base' key='anxious-face' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'clown-face': newComponent = <BaseComponents.ClownFace type='base' key='clown-face' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'angry-horns-face': newComponent = <BaseComponents.AngryHornsFace type='base' key='angry-horns-face' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'neutral-left-eye': newComponent = <LeftEyeComponents.NeutralLeftEye type='left-eye' key='neutral-left-eye' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'pensive-left-eye': newComponent = <LeftEyeComponents.PensiveLeftEye type='left-eye' key='pensive-left-eye' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'neutral-right-eye': newComponent = <RightEyeComponents.NeutralRightEye type='right-eye' key='neutral-right-eye' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      default:  newComponent = null;
   }
   return newComponent
}