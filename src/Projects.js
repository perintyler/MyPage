/* Projects.js */

class Project 
{
    constructor(name, description, languages, frameworks, preview, repoUrl, websiteUrl = null) {
        this.name = name;
        this.description = description;
        this.languages = languages;
        this.frameworks = frameworks;
        this.repoUrl = repoUrl;
        this.websiteUrl = websiteUrl;
    }
}

const PROJECTS = [

    new Project(
        'www.Crypto-Book.xyz',
        'Realtime cryptocurrency purchase recommendations powered by websockets',
        ['Python', 'Node'],
        ['WebSockets', 'GCP', 'React', 'Flask'],
        'TP.png',
        'https://github.com/perintyler/Crypto-Recommendations',
        'https://crypto-books.xyz'
    ),

    new Project(
        'Arch App',
        'An iOS app where users could create events at our partnered venues and receive tiered discounts and promotions for food, drinks, and tickets; more people = more savings.',
        ['Swift', 'Python'],
        ['Django', 'Heroku', 'Facebook SDK', 'Firebase'],
        'TP.png',
        'https://github.com/perintyler/arch-app',
        'https://arch-app.com'
    ),

    new Project(
        'Piano960',
        'A cross platform audio plugin / virtual instrument (C++) where each MIDI key plays a different random sample',
        ['C++'],
        ['CMake', 'JUCE Framework'],
        'TP.png',
        'https://github.com/perintyler/Piano960'
    ),


    new Project(
        'iMessage Playlist Curator', 
        'Create a spotify playlist containing all songs shared in an iMessage group text',
        ['Python'],
        ['SQLite', 'Spotify API'],
        'TP.png',
        'https://github.com/perintyler/imessage_playlist'
    ),

    new Project(
        'pychessengine',
        'A python chess engine with minimax, alpha-beta pruning, magic bitboards, MVV-LVA, Zobrist Hashing, and a custom heurstics function for positional evaluation',
        ['Python'],
        [],
        'TP.png',
        'https://github.com/perintyler/pychessengine'
    ),

    new Project(
        'www.Poetry-Parser.com',
        'A React web-app that parses Poetry dependency files to visualize a dependency tree that you can click through',
        ['Node'],
        ['React', 'Firebase', 'Sentry', 'GitHub CI'],
        'TP.png',
        'https://github.com/perintyler/Poetry-File-Parser',
        'https://poetry-parser.com'
    ),

    new Project(
        'Bash Kit',
        'A python package for defining fun or useful commands that can be called from a terminal prompt, such as the `google` command',
        ['Python', 'Bash', 'AppleScript'],
        ['pytest'],
        'TP.png',
        'https://github.com/perintyler/tpkit'
    ),

    new Project(
        'NBA Prediction',
        'Scrapes data from basketball-reference.com and uses a neural net to predict the results of NBA games',
        ['Python'],
        ['Tensorflow'],
        'TP.png',
        'https://github.com/perintyler/tpkit'
    ),

    new Project(
        'News Sentiment Analysis',
        'Graphs the subjectivity and polarity of news articles over time for a keyword.',
        ['Python'],
        ['News API', 'MongoDB', 'Matplotlib'],
        'TP.png',
        'https://github.com/perintyler/news_sentiment_analysis'
    ),
];

export default PROJECTS;
