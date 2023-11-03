/*** Animations.jsx ***/

import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

export function FadeInContainer({ show, duration, children })
{
    const animationReference = useRef(null);
    
    const container = (
      <div 
        ref={animationReference} 
        style={{width: "100%", height: "100%"}}
        children={children}
      />
    );

    return (
        <CSSTransition
          mountOnEnter
          in={show || true} 
          appear={show || true} 
          timeout={duration || 1000} 
          classNames="main-view"
          nodeRef={animationReference}
          children={container}
        />
    );
}
