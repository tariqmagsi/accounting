import { bounce, fadeInLeft, fadeInRight } from 'react-animations';
import Radium from 'radium';
import fadeInDown from 'react-animations/lib/fade-in-down';

export function getAnimation() {
    const styles = {
        bounce: {
          animation: 'x 1s',
          animationName: Radium.keyframes(bounce, 'bounce')
        },
        fadeInLeft : {
            animation: 'x 1s',
            animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
        },
        fadeInRight : {
            animation: 'x 1s',
            animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
        },
        fadeInDown : {
            animation: 'x 1s',
            animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
        }
    }
    
    return styles
}