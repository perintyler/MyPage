/*** Backdrops.jsx ***/

import { FadeInContainer } from './Animations';
import './Backdrops.css';

function ImageBackdrop(props)
{
  var image = `url(${process.env.PUBLIC_URL}/${props.image})`;

  return (
    <FadeInContainer>
      <div className='backdrop' style={{backgroundImage:image}} {...props} />
    </FadeInContainer>
  );
}

export function RedBackdrop(props)
{
  return <ImageBackdrop image="red-backdrop.png" {...props} />
}

export function YellowBackdrop(props)
{
  return <ImageBackdrop image="yellow-backdrop.png" {...props} />
}

export function BlueBackdrop(props)
{
  return <ImageBackdrop image='blue-backdrop.png' {...props} />
}
