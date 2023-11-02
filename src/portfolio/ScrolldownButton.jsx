/*** ScrolldownButton.jsx ***/

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './ScrolldownButton.css';

function GlowingBlueCircle({ children })
{
    return (
      <div className="glowing-orb-container">
        <div className="glowing-orb glow fadeInDown">
          <div className="inside-circle">
              {children}
          </div>
          <div className="outside-circle animated hinge infinite zoomIn"></div>
        </div>
      </div>
    );
}

function AnimatedArrows()
{
    return (
        <div class="indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
    );
}

export default function ScrolldownButton({ title })
{
  return (
    <GlowingBlueCircle>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Typography className="scrolldown-button-title" zIndex="5" ml="6px" mt="70px" color="white" fontSize="1.8em">{title}</Typography>
        <Box mt="75px"><AnimatedArrows /></Box>
      </Box>

    </GlowingBlueCircle>
  );
}