import * as BaseComponents from '../components/bases/baseComps'
import * as LeftEyeComponents from '../components/leftEyes/leftEyeComps'
import * as RightEyeComponents from '../components/rightEyes/rightEyeComps'
import * as LeftEyebrowComponents from '../components/leftEyebrows/leftEyebrowComps'
import * as RightEyebrowComponents from '../components/rightEyebrows/rightEyebrowComps'
import * as NoseComponents from '../components/noses/noseComps'
import * as MouthComponents from '../components/mouths/mouthComps'




export default function getNewEmojiComponent(compName, compProps){
    var newComponent = null;
    var scale = '1'
    var rot = '0'
    var x = '0'
    var y = '0'
    var h = null
    var s = null
    var l = null

    switch (compName) {
      case 'neutral-face': newComponent = <BaseComponents.NeutralFace type='base' key='neutral-face' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'anxious-face': newComponent = <BaseComponents.AnxiousFace type='base' key='anxious-face' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'clown-face': newComponent = <BaseComponents.ClownFace type='base' key='clown-face' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'angry-horns-face': newComponent = <BaseComponents.AngryHornsFace type='base' key='angry-horns-face' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'dotted-line-face': newComponent = <BaseComponents.DottedLineFace type='base' key='dotted-line-face' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'cat-face': newComponent = <BaseComponents.CatFace type='base' key='cat-face' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'exploding-head-face': newComponent = <BaseComponents.ExplodingHeadFace type='base' key='exploding-head-face' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'melting-face': newComponent = <BaseComponents.MeltingFace type='base' key='melting-face' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'neutral-left-eye': newComponent = <LeftEyeComponents.NeutralLeftEye type='left-eye' key='neutral-left-eye' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'pensive-left-eye': newComponent = <LeftEyeComponents.PensiveLeftEye type='left-eye' key='pensive-left-eye' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'beaming-left-eye': newComponent = <LeftEyeComponents.BeamingLeftEye type='left-eye' key='beaming-left-eye' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'confounded-left-eye': newComponent = <LeftEyeComponents.ConfoundedLeftEye type='left-eye' key='confounded-left-eye' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'expressionless-left-eye': newComponent = <LeftEyeComponents.ExpressionlessLeftEye type='left-eye' key='expressionless-left-eye' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'neutral-right-eye': newComponent = <RightEyeComponents.NeutralRightEye type='right-eye' key='neutral-right-eye' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'pensive-right-eye': newComponent = <RightEyeComponents.PensiveRightEye type='right-eye' key='pensive-right-eye' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'beaming-right-eye': newComponent = <RightEyeComponents.BeamingRightEye type='right-eye' key='beaming-right-eye' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'confounded-right-eye': newComponent = <RightEyeComponents.ConfoundedRightEye type='right-eye' key='confounded-right-eye' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'neutral-left-eyebrow': newComponent = <LeftEyebrowComponents.NeutralLeftEyebrow type='left-eyebrow' key='neutral-left-eyebrow' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'expressionless-right-eye': newComponent = <RightEyeComponents.ExpressionlessRightEye type='right-eye' key='expressionless-right-eye' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'neutral-right-eyebrow': newComponent = <RightEyebrowComponents.NeutralRightEyebrow type='right-eyebrow' key='neutral-right-eyebrow' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'lying-nose': newComponent = <NoseComponents.LyingNose type='nose' key='lying-nose' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'cat-nose': newComponent = <NoseComponents.CatNose type='nose' key='cat-nose' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'clown-nose': newComponent = <NoseComponents.ClownNose type='nose' key='clown-nose' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'disguised-nose': newComponent = <NoseComponents.DisguisedNose type='nose' key='disguised-nose' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'small-smile': newComponent = <MouthComponents.SmallSmile type='mouth' key='small-smile' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'big-frown': newComponent = <MouthComponents.BigFrown type='mouth' key='big-frown' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'small-frown': newComponent = <MouthComponents.SmallFrown type='mouth' key='small-frown' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'astonished-mouth': newComponent = <MouthComponents.AstonishedMouth type='mouth' key='astonished-mouth' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'beaming-smile': newComponent = <MouthComponents.BeamingSmile type='mouth' key='beaming-smile' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'confounded-mouth': newComponent = <MouthComponents.ConfoundedMouth type='mouth' key='confounded-mouth' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'confused-mouth': newComponent = <MouthComponents.ConfusedMouth type='mouth' key='confused-mouth' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'expressionless-mouth': newComponent = <MouthComponents.ExpressionlessMouth type='mouth' key='expressionless-mouth' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'kiss-mouth': newComponent = <MouthComponents.KissMouth type='mouth' key='kiss-mouth' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'gasping-mouth': newComponent = <MouthComponents.GaspingMouth type='mouth' key='gasping-mouth' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'diagonal-mouth': newComponent = <MouthComponents.DiagonalMouth type='mouth' key='diagonal-mouth' h={h} s={s} l={l} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      default:  newComponent = null;
   }
   return newComponent
}