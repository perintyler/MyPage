
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function StartSignupButton({ onClick }) 
{
    return (
        <Box className="signup-button-container"> 
            <Button onClick={()=>onClick()} variant="contained">Sign Up</Button>
        </Box>
    );
}

function TutoringInfoBoxContainer({ children })
{
    return (
        <Box className="tutoring-info-box">
            <div className="numbered-list">{children}</div>
        </Box>
    );
}

export default function TutoringServicesList({ startSignup })
{
    var serviceList = (
        <ol className="alternating-colors">
            <li>
                <strong>AP Computer Science</strong>
                <p>Learn how to ace the AP test (I got a 5 when I took it many years ago)</p>
            </li>
            <li>
                <strong>Beginner & Intermediate Python</strong>
                <p>Learn how to build awesome tools and GUIs using Python (my favorite language)</p>
            </li>
            <li>
                <strong>Web-Design</strong>
                <p>Learn Javascript, HTML, CSS, and modern web frameworks like React</p>
            </li>
            <li>
                <strong>Data Structures & Algorithms</strong>
                <p>Learn the theory behind the code</p>
            </li>
            <li>
                <strong>Personalized Curiculum</strong>
                <p>Lessons tailored for your success</p>
            </li>
        </ol>
    );

    return (
        <TutoringInfoBoxContainer>
            <h1 id="tutoring-info-box-title">1-on-1 Computer Science Tutoring with Tyler Perin</h1>
            {serviceList}
            <StartSignupButton onClick={startSignup} />
        </TutoringInfoBoxContainer>
    );
}
