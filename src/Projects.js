/* Projects.js */

class Project 
{
    constructor(name, description, year, languages, frameworks, preview, repoUrl, websiteUrl = null) {
        this.name = name;
        this.description = description;
        this.year = year;
        this.languages = languages;
        this.frameworks = frameworks;
        this.repoUrl = repoUrl;
        this.websiteUrl = websiteUrl;
    }

    hasWebsite()
    {
        return this.repoUrl !== null;
    }
}

const PROJECTS = [

    new Project(
        'Piano960',
        'A cross platform audio plugin / virtual instrument (C++) where each MIDI key plays a different random sample',
        2023,
        ['C++'],
        ['CMake', 'JUCE Framework'],
        'TP.png',
        'https://github.com/perintyler/Piano960'
    ),

    new Project(
        'Crypto Recommendations (www.crypto-book.xyz)',
        'Realtime cryptocurrency purchase recommendations powered by websockets',
        2021,
        ['Python', 'Node'],
        ['WebSockets', 'GCP', 'React', 'Flask'],
        'TP.png',
        'https://github.com/perintyler/Crypto-Recommendations',
        'https://crypto-books.xyz'
    ),

    new Project(
        'iMessage Playlist Curator', 
        'Create a spotify playlist containing all songs shared in an iMessage group text',
        2023,
        ['Python'],
        ['SQLite', 'Spotify API'],
        'TP.png',
        'https://github.com/perintyler/imessage_playlist'
    ),

    new Project(
        'Arch App',
        'An iOS app where users could create events at our partnered venues and receive tiered discounts and promotions for food, drinks, and tickets; more people = more savings.',
        2018,
        ['Swift', 'Python'],
        ['Django', 'Heroku', 'Facebook SDK', 'Firebase'],
        'TP.png',
        'https://github.com/perintyler/arch-app',
        'https://arch-app.com'
    ),

    new Project(
        'PyObjectValidation',
        'A library for defining type-safe schemas, allowing for seamless serialization and deserialization of Python objects',
        2021,
        ['Python'],
        ['pytest'],
        'TP.png',
        'https://github.com/perintyler/PyObjectValidation'
    ),

    new Project(
        'Poetry File Parser (www.poetryparser.com)',
        'A React web-app that parses Poetry dependency files to visualize a dependency tree that you can click through',
        2023,
        ['Node'],
        ['React', 'Firebase', 'Sentry', 'GitHub CI'],
        'TP.png',
        'https://github.com/perintyler/Poetry-File-Parser',
        'https://poetryparser.com'
    ),

    new Project(
        'pychessengine',
        'A python chess engine with minimax, alpha-beta pruning, magic bitboards, MVV-LVA, Zobrist Hashing, and a custom heurstics function for positional evaluation',
        2021,
        ['Python'],
        [],
        'TP.png',
        'https://github.com/perintyler/pychessengine'
    ),

    new Project(
        'Bash Kit',
        'Defines and sources fun or useful commands that can be called from a terminal prompt, such as the `google` command',
        2023,
        ['Python', 'Bash', 'AppleScript'],
        ['pytest'],
        'TP.png',
        'https://github.com/perintyler/tpkit'
    ),

    new Project(
        'NBA Prediction',
        'Scrapes data from basketball-reference.com and uses a neural net to predict the results of NBA games',
        2020,
        ['Python'],
        ['Tensorflow'],
        'TP.png',
        'https://github.com/perintyler/tpkit'
    ),

    new Project(
        'News Sentiment Analysis',
        'Graphs the subjectivity and polarity of news articles over time for a keyword.',
        2020,
        ['Python'],
        ['News API', 'MongoDB', 'Matplotlib'],
        'https://raw.githubusercontent.com/perintyler/news_sentiment_analysis/master/subjectivity.png',
        'https://github.com/perintyler/news_sentiment_analysis'
    )
];

function getProjects(sortByDate=false, sortByCoolness=false, onlyProjectsWithWebsites=false)
{
    return PROJECTS;
}

export default PROJECTS;
