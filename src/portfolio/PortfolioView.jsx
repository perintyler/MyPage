import { useRef } from 'react';
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

function PortfolioHeader({ portfolioBodyRef })
{
    function GreetingBox()
    {        
        return (
            <Box sx={{textAlign: "center"}} pt="8%" pl="36px" pr="36px">
                <Typography id="hi" variant="h2" color="white" ml="36px">
                    Hi 
                    <span id="wave-emoji">👋</span>
                </Typography>
                <Typography id="reach-me" variant="h4" pl="5px" pt={4} pb="10px" color="white">
                    You can reach me at 
                    <Link id="my-email" href="mailto: tyler@perin.email">
                        tyler@perin.email
                    </Link> 
                </Typography>
            </Box>
        )
    }

    function NavBar()
    {
        const githubIconSize = "50px";
        const githubIconStyle = {
            color: "#FFD23F", 
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
                <ScrolldownButton 
                  title="portfolio"
                  onClick={()=>portfolioBodyRef.current.scrollIntoView(true)}
                />
            </Box>
        );
    }

    return (
        <Box id="portfolio-header" backgroundColor="black" color="#00DB86" minHeight="100vh">
            <NavBar />
            <GreetingBox />
            <ProjectsButton />
        </Box>
    );
}

function PortfolioBody({ reference })
{
    var titleBar = (
        <Box 
          pt="24px" 
          pb="40px" 
          height="100px" 
          width="100%" 
          backgroundColor="rgba(0, 0, 0, 0.75)"  
          borderBottom="20px" 
          borderColor="black"
        >
            <Typography
              ml="12px" 
              mt="18px" 
              mb="18px" 
              pl="3px" 
              pb="3px"
              variant="h2" 
              color="white" 
              borderTop={1} 
              borderBottom={1} 
              borderColor="white"
              id="portfolio-body-title"
              children="Portfolio"
            />
        </Box>
    );

    var projectsBox = (
        <Box pl="6px" pr="6px" pt="24px" pb="24px">
            <ProjectGrid projects={getProjects()} />
        </Box>
    );

    return <div ref={reference}>{titleBar}{projectsBox}</div>;
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
          height="120px"
          children={repoLink}
          borderTop={1}
          borderColor="#8FCAF9"
          mt="40px"
        />
    );
}

export default function PortfolioView()
{
    const portfolioBodyRef = useRef(null);

    return (
        <Box id="portfolio-view" minHeight="100vh" backgroundColor="#00DB86">
            <FadeInContainer>
                <ThemeProvider theme={darkTheme}>
                    <PortfolioHeader portfolioBodyRef={portfolioBodyRef} />
                    <BlueAndRedBackdrop>
                        <PortfolioBody reference={portfolioBodyRef} />
                        <PortfolioFooter />
                    </BlueAndRedBackdrop>
                </ThemeProvider>
            </FadeInContainer>
        </Box>
    );
}
