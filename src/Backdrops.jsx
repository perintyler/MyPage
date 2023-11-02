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
  return <ImageBackdrop image="backdrop_red.png" {...props} />
}

export function YellowBackdrop(props)
{
  return <ImageBackdrop image="backdrop_yellow.png" {...props} />
}

export function BlueAndRedBackdrop(props)
{
  return <ImageBackdrop image='backdrop_blue-and-red.png' {...props} />
}
