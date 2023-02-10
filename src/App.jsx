import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import SvgIcon from '@mui/material/SvgIcon';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { ReactComponent as WebsiteLogo } from './TP.svg';
import { ReactComponent as GithubIcon } from './github.svg';
import { CSSTransition } from 'react-transition-group';

import ProjectGrid from './ProjectGrid'
import { LogoAnimation, FadeInContainer } from './Animations';

import PROJECTS from './Projects';

import './App.css';

const RED = "#FF2467";

function LogoBox()
{
    return (
        <Box margin={2}>
            <img src="TP.png" style={{width: "75px", height: "75px"}}/>
        </Box>
    );
}

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
            <Typography variant="h2" paddingLeft={1}><b>Hi. </b>👋</Typography>
            <Typography variant="h1"><b>I'm Tyler.</b></Typography>
            <Typography variant="h4" paddingTop={4} paddingBottom={5}>
                You can reach me at <Link>tyler@perin.email</Link>
            </Typography>
            <a href="https://github.com/perintyler" style={{textDecoration: "none"}}>
                <Button variant="outlined" sx={{borderColor: "#551A8B", padding: "15px"}}>
                    <GithubSVG width={36} height={36} color="#551A8B" /> 
                    <Typography paddingLeft={1} color="#551A8B">github.com/perintyler</Typography>
                </Button>
            </a>
        </Box>
    )
}

export default class App extends React.Component {

    state = { ready: false };

    render()
    {
        const logoAnimationBox = (
            <>
                <Button onClick={()=>this.setState({ready:true})}>Skip</Button>
                <Box 
                  display="flex" 
                  justifyContent="center" 
                  alignItems="center"
                  direction="row"
                  height="90vh" 
                  width="100vw"
                  children={<LogoAnimation onDone={()=>this.setState({ready:true})} />}
                />
            </>
        );

        const mainViewBox = (
            <FadeInContainer hide={!this.state.ready}>
                <Box 
                  margin={2}
                  children={<img src="TP.png" style={{width: "75px", height: "75px"}} />}
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

        return <div className="App">{ !this.state.ready ? logoAnimationBox : mainViewBox }</div>;
    }
}
