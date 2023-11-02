/* ProjectGrid.jsx */

import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function SkillBox({ skill })
{
    return <Box className="Skill-Grid-Item">{skill}</Box>;
}

function SkillGrid({ languages, frameworks })
{
    const skills = languages.concat(frameworks);
    const gridItems = skills.map((skill) => <Grid item key={skill}><SkillBox skill={skill} /> </Grid>);
    return <Grid container justifyContent="center">{gridItems}</Grid>
}


function ProjectCard({ project, preview })
{
    const projectTitle = (
        <span><Typography display="inline" variant="h6"><b>{project.name}</b></Typography></span>
    );

    const projectDescription = <Typography>{project.description}</Typography>;

    const githubLink = (
        <Button>
            <Link href={project.repoUrl}>Github Repo</Link>
        </Button>
    );

    const websiteLink = (
        <Button>
            <Link href={project.websiteUrl}>Website</Link>
        </Button>
    );

    const skillGrid = <SkillGrid languages={project.languages} frameworks={project.frameworks} />;

    const links = project.websiteUrl === null ? (<>{githubLink}</>) : (<>{githubLink}{websiteLink}</>);

    return (
        <Box border={2} height="100%" backgroundColor="rgba(0, 0, 0, 0.7)" color="#C9D6EA">
            <Box margin={2}>

                <Box display="inline">
                    {projectTitle}
                </Box>
                <Box paddingTop={1}>{projectDescription}</Box>
                <Box marginTop={1} display="flex" justifyContent="center">{links}</Box>
            </Box>
            <Box marginTop={2} marginBottom={2}>{skillGrid}</Box>
            {/*{preview}*/}
        </Box>
    );
}

function ProjectGridItem({ project })
{
    const [previewIsOpen, setPreviewState] = useState(false);

    const closePreview = () => {setPreviewState(false); }
    const openPreview = () => setPreviewState(true);

    const preview = (
        <Dialog open={previewIsOpen}>
            <ClickAwayListener onClickAway={closePreview}>
                <img src="TP.png" alt="demo" />
            </ClickAwayListener>
        </Dialog>
    );

    return (
        <ThemeProvider theme={darkTheme}>
            <Grid item 
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={4}
              className="Project-Grid-Item" 
              onClick={openPreview}
              children={<ProjectCard project={project} preview={preview} />}
            /> 
        </ThemeProvider>
    );
}

export default function ProjectGrid({ projects })
{
    return (
        <Grid container
          rowSpacing={2}
          columnSpacing={1}
          justifyContent="flex-start" 
          alignItems="stretch"
          children={projects.map((project)=><ProjectGridItem project={project} key={project.name}/>)}
        />
    );
}