/* Animations.jsx */

import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export function LogoAnimation({onDone})
{
  const [isAnimating, setAnimationState] = useState(true);
  const [imageSource, setImageSource] = useState('TP.png');
  
  const switchToGIF = () => {
      setImageSource('TP.gif');
      setAnimationState(false);
  };

  const nodeRef = useRef(null);

  return (
      <CSSTransition
        mountOnEnter
        unmountOnExit
        appear={true}
        nodeRef={nodeRef} 
        in={isAnimating}
        timeout={{appear:1750, enter: 2000, exit: 3000}}
        classNames="logo-animation" 
        onEntered={switchToGIF}
        onExited={onDone}
        children={<img src={imageSource} ref={nodeRef} />}
      />
  );
}

export function FadeInContainer(props)
{
    const animationReference = useRef(null);
    
    const container = (
      <div 
        ref={animationReference} 
        style={{width: "100%", height: "100%"}}
        children={props.children}
      />
    );

    return (
        <CSSTransition 
          mountOnEnter
          in={!props.hide} 
          appear={!props.hide} 
          timeout={1000} 
          classNames="main-view"
          nodeRef={animationReference}
          children={container}
        />
    );
}

