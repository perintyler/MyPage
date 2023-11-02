/*** Animations.jsx ***/

import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

export function FadeInContainer(props)
{
    const animationReference = useRef(null);
    
    const container = (
      <div 
        ref={animationReference} 
        style={{width: "100%", height: "100%"}}
        {...props}
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

