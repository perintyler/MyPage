import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as GithubIcon } from './github.svg';

import ProjectGrid from './ProjectGrid'
import getProjects from './Projects';
import COLORS from './Colors';
import { LogoAnimation, FadeInContainer } from './Animations';
import './App.css';

function GithubSVG({ width, height, color, hoverColor })
{
    return (
        <Box width={width} height={height} display="flex" justifyContent="center">
            <SvgIcon component={GithubIcon} sx={{
                color: color, 
                "&:hover": {color: hoverColor}, 
                textAlign: "center", 
                width: width, 
                height: height
            }} />
        </Box>
    );
}

function GreetingBox()
{
    return (
        <Box margin={4} paddingBottom={2} sx={{textAlign: "center"}}>
            <Typography variant="h2" paddingLeft={1}><b>Hi 👋</b></Typography>
            <Typography variant="h4" paddingTop={4} paddingBottom={5}>
                You can reach me at <Link href="mailto: tyler@perin.email">tyler@perin.email</Link> 
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

function HeaderBar()
{
    return (
        <Grid container width="100%" direction="row" alignItems="flex-start" justifyContent="space-between" >
            <Grid item justify="flex-start"> 
                <Box
                  margin={2}
                  children={<img src="TP.png" alt="logo" width="120px" height="120px" />}
                />
            </Grid>
            <Grid item justify="flex-end" margin={1} paddingTop={1}> 
                <a href="https://github.com/perintyler">
                    <GithubSVG width="50px" height="50px" color={COLORS.purple} hoverColor={COLORS.blue} />
                </a>
            </Grid>
        </Grid>
    );
}
function PortfolioView({ hide })
{
    return (
        <FadeInContainer hide={hide}>
            <HeaderBar />
            <Box paddingBottom="50px">
                <GreetingBox />
                <Box 
                  paddingTop={1} 
                  marginLeft={2} 
                  marginRight={2}
                  children={<ProjectGrid projects={getProjects()} />}
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
