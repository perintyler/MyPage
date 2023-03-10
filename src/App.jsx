import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as GithubIcon } from './github.svg';

import ProjectGrid from './ProjectGrid'
import getProjects from './Projects';
import COLORS from './Colors';
import { FadeInContainer } from './Animations';
import './App.css';

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

function HeaderBar()
{
    const websiteLogoBox = (
        <Box margin={2}>
            <img src="TP.png" alt="logo" width="120px" height="120px" />
        </Box>
    );

    const githubIconSize = "50px"; // width and height

    const githubIconStyle = {
        color: COLORS.purple, 
        "&:hover": {color: COLORS.blue}, 
        textAlign: "center", 
        width: githubIconSize, 
        height: githubIconSize
    };

    const githubSVGBox = (
        <Box width={githubIconSize} height={githubIconSize} display="flex" justifyContent="center">
            <a href="https://github.com/perintyler">
                <SvgIcon component={GithubIcon} sx={githubIconStyle}/>
            </a>
        </Box>
    );

    return (
        <Grid container width="100%" direction="row" alignItems="flex-start" justifyContent="space-between" >
            <Grid item 
              justify="flex-start"
              children={websiteLogoBox}
            />
            <Grid item 
              justify="flex-end" 
              margin={1} 
              paddingTop={1}
              children={githubSVGBox}
            />
        </Grid>
    );
}

export default function App()
{
    return (
        <div className="App">
            <FadeInContainer hide={false}>
                <HeaderBar />
                
                <Box paddingBottom="50px">
                    <GreetingBox />
                    <Box paddingTop={1} marginLeft={2} marginRight={2}>
                        <ProjectGrid projects={getProjects()} />
                    </Box>
                </Box>

                <Box display="flex" width="100%" justifyContent="center" paddingBottom="30px">
                    <Link href="https://github.com/perintyler/MyPage">See Source Code</Link>
                </Box>
            </FadeInContainer>
        </div>
    );
}
