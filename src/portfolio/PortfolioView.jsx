import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import SvgIcon from '@mui/material/SvgIcon';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BlueAndRedBackdrop } from '../Backdrops';
import { FadeInContainer } from '../Animations';
import { ReactComponent as GithubIcon } from './github.svg';
import ProjectGrid from './ProjectGrid'
import getProjects from './Projects';
import ScrolldownButton from './ScrolldownButton';
import './PortfolioView.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function PortfolioHeader()
{
    function GreetingBox()
    {
        return (
            <Box sx={{textAlign: "center"}} pt="8%">
                <Typography variant="h2" color="white" pl="22px"><b>Hi 👋</b></Typography>
                <Typography variant="h4" pr="12px" pt={4} pb={5} color="white">
                    You can reach me at <Link href="mailto: tyler@perin.email" color="#00DB86">tyler@perin.email</Link> 
                </Typography>
            </Box>
        )
    }

    function NavBar()
    {
        const githubIconSize = "50px";
        const githubIconStyle = {
            color: "#EE4266", 
            "&:hover": {color: "#00A5CF"}, 
            textAlign: "center", 
            width: githubIconSize, 
            height: githubIconSize
        };

        const githubIcon = (
            <Box pr="12px" pt="12px" width={githubIconSize} height={githubIconSize}>
                <a href="https://github.com/perintyler">
                    <SvgIcon component={GithubIcon} sx={githubIconStyle}/>
                </a>
            </Box>
        );

        return <Box display="flex" justifyContent="flex-end" width="100%">{githubIcon}</Box>;
    }

    function ProjectsButton()
    {
        return (
            <Box textAlign="center" width="100%" height="500px">
                <ScrolldownButton title="portfolio" />
            </Box>
        );
    }

    return (
        <Box backgroundColor="black" color="#00DB86" minHeight="100vh">
            <NavBar />
            <GreetingBox />
            <ProjectsButton />
        </Box>
    );
}

function PortfolioBody()
{
    var titleBar = (
        <Box 
          pt="24px" 
          pb="30px" 
          height="100px" 
          width="100%" 
          backgroundColor="rgba(0, 0, 0, 0.9)"  
          borderBottom="20px" 
          borderColor="black"
        >
            <Typography 
              ml="12px" 
              mt="18px" 
              mb="18px" 
              pl="3px" 
              variant="h2" 
              color="white" 
              borderTop={1} 
              borderBottom={1} 
              borderColor="white"
              children="Portfolio"
            />
        </Box>
    );

    var projectsBox = (
        <Box pl="12px" pr="12px" pt="24px" pb="36px">
            <ProjectGrid projects={getProjects()} />
        </Box>
    );

    return <>{titleBar}{projectsBox}</>;
}

function PortfolioFooter()
{
    let repoUrl = "https://github.com/perintyler/MyPage";
    let repoLink = <Link href={repoUrl}>See Source Code</Link>;

    return (
        <Box 
          width="100%" 
          display="flex" 
          justifyContent="center" 
          alignItems="center" 
          backgroundColor="rgba(0, 0, 0, 0.92)" 
          height="60px"
          children={repoLink}
          borderTop={1}
          borderColor="#8FCAF9"
        />
    );
}

export default function PortfolioView()
{
    return (
        <Box id="portfolio-view" minHeight="100vh" backgroundColor="#00DB86">
            <FadeInContainer>
                <ThemeProvider theme={darkTheme}>
                    <PortfolioHeader />
                    <BlueAndRedBackdrop>
                        <PortfolioBody />
                        <PortfolioFooter />
                    </BlueAndRedBackdrop>
                </ThemeProvider>
            </FadeInContainer>
        </Box>
    );
}
