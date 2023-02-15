import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as GithubIcon } from './github.svg';

import ProjectGrid from './ProjectGrid'
import PROJECTS from './Projects';
import { LogoAnimation, FadeInContainer } from './Animations';
import './App.css';

function GithubSVG({ width, height, color })
{
    return (
        <Box margin={0} width={width} height={height} display="flex" justifyContent="center">
            <SvgIcon 
              sx={{color: color, textAlign: "center", width: width, height: height}} 
              component={GithubIcon} 
            />
        </Box>
    );
}

function GreetingBox()
{
    return (
        <Box margin={4} paddingBottom={2} sx={{textAlign: "center"}}>
            <Typography variant="h2" paddingLeft={1}><b>Hi 👋</b></Typography>
            <Typography variant="h4" paddingTop={4} paddingBottom={5}>
                You can reach me at <Link>tyler@perin.email</Link>
            </Typography>
        </Box>
    )
}

function IntroAnimationView({ onDone })
{
    return (
        <>
            <Button onClick={onDone}>Skip</Button>
            <Box 
              display="flex" 
              justifyContent="center" 
              alignItems="center"
              direction="row"
              height="90vh" 
              width="100vw"
              children={<LogoAnimation onDone={onDone} />}
            />
        </>
    );
}

function PortfolioView({ hide })
{
    return (
        <FadeInContainer hide={hide}>
            <Box 
              margin={2}
              children={<img src="TP.png" alt="logo" style={{width: "75px", height: "75px"}} />}
            />
            <Box paddingBottom="50px">
                <GreetingBox />
                <Box 
                  paddingTop={1} 
                  marginLeft={2} 
                  marginRight={2}
                  children={<ProjectGrid projects={PROJECTS} />}
                />
            </Box>
            <Box 
              display="flex" 
              width="100%" 
              justifyContent="center"
              paddingBottom="30px"
              children={<Link href="https://github.com/perintyler/MyPage">See Source Code</Link>}
            />
        </FadeInContainer>
    );
}

export default class App extends React.Component {

    state = { ready: true };

    render()
    {
        const homeView = !this.state.ready 
                       ? (<IntroAnimationView onDone={()=>this.setState({ready: true})} />)
                       : (<PortfolioView hide={!this.state.ready} />);

        return <div className="App">{homeView}</div>;
    }
}
