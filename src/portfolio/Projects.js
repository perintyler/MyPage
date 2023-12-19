/* Projects.js */

//
// TODO:
//  - read project data from a JSON file instead of instantiating 
//    all the `Project` instances below
//

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

    hasWebsite() { return this.websiteUrl !== null; }
    hasRepo() { return this.repoUrl !== null; }
}

const PROJECTS = [

    new Project(
        'Frets & Keys 🎸 ↔️ 🎹',
        'A web-app to visualize the differences between a fretboard and a keyboard',
        2023,
        ['Javascript'],
        ['React', 'Firebase'],
        'TP.png',
        'https://github.com/perintyler/FretsAndKeys',
        'https://fretsandkeys.xyz/'
    ),

    new Project(
        'Athlete',
        'A Shopify app for syncing Etsy orders',
        2023,
        ['Ruby on Rails', 'Javascript'],
        ['PostgreSQL', 'Redis'],
        'TP.png',
        null, // it's a private repository
        'https://www.sellwithathlete.com/'
    ),

    new Project(
        'MySampler',
        'A cross platform audio plugin / virtual keyboard where each MIDI key plays a different random sample',
        2023,
        ['C++', 'Python', 'Bash'],
        ['CMake', 'TensorFlow'],
        'TP.png',
        'https://github.com/perintyler/MySampler'
    ),

    new Project(
        'AutoMusicVideo',
        'Generates music videos with nothing but an MP3 file using stable diffusion',
        2023,
        ['Python'],
        ['Stable Diffusion', 'GCP Storage'],
        'TP.png',
        'https://github.com/perintyler/AutoMusicVideo',
    ),

    new Project(
        'pychessengine',
        'A python chess engine with minimax, alpha-beta pruning, magic bitboards, MVV-LVA, Zobrist Hashing, and a custom heuristics function for positional evaluation',
        2021,
        ['Python'],
        [],
        'TP.png',
        'https://github.com/perintyler/pychessengine'
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
        'Poetry File Parser',
        'A React web-app that parses Poetry files to visualize a dependency tree that you can click through',
        2023,
        ['Node'],
        ['React', 'Firebase', 'Sentry', 'GitHub CI'],
        'TP.png',
        'https://github.com/perintyler/Poetry-File-Parser',
        'https://poetryparser.com'
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
        'News Sentiment Analysis',
        'Graphs the subjectivity and polarity of news articles over time for a keyword.',
        2020,
        ['Python'],
        ['News API', 'MongoDB', 'Matplotlib'],
        'https://raw.githubusercontent.com/perintyler/news_sentiment_analysis/master/subjectivity.png',
        'https://github.com/perintyler/news_sentiment_analysis'
    )
];

export default function getProjects(sortByDate=false, onlyProjectsWithWebsites=false)
{
    var projects = onlyProjectsWithWebsites
                 ? PROJECTS.filter((project) => project.websiteUrl !== null)
                 : [...PROJECTS];

    if (sortByDate) {
        projects.sort((project1, project2) => project1.year.localeCompare(project2.year));
    }

    return projects;
}
