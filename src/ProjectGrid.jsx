/* ProjectGrid.jsx */

import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import ClickAwayListener from '@mui/base/ClickAwayListener';

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

function ProjectBox({ project, preview })
{
    const projectTitle = (
        <span><Typography display="inline" variant="h6"><b>{project.name}</b></Typography></span>
    );

    const projectDescription = <Typography>{project.description}</Typography>;

    const githubLink = (
        <Button><Link href={project.repoUrl}>
            Github Repo
        </Link></Button>
    );

    const websiteLink = (
        <Link marginLeft={4} marginRight={4} href={project.websiteUrl}>
            <Button>Website</Button>
        </Link>
    );

    const skillGrid = <SkillGrid languages={project.languages} frameworks={project.frameworks} />;

    const links = project.websiteUrl === null ? (<>{githubLink}</>) : (<>{githubLink}{websiteLink}</>);

    return (
        <Box border={2} height="100%">
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
                <img src="TP.png" />
            </ClickAwayListener>
        </Dialog>
    );

    return (
        <Grid item 
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={4}
          className="Project-Grid-Item" 
          onClick={openPreview}
          children={<ProjectBox project={project} preview={preview} />}
        /> 
    );
}

export default function ProjectGrid({ projects })
{
    return (
        <Grid container
          rowSpacing={2}
          columnSpacing={1}
          justifyContent="center" 
          alignItems="stretch"
          children={projects.map((project)=><ProjectGridItem project={project} key={project.name}/>)}
        />
    );
}