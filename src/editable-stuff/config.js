// Navigation Bar SECTION
const navBar = {
    show: true,
};

// Main Body SECTION
const mainBody = {
    gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
    firstName: "Mohammad",
    middleName: "",
    lastName: "Mohammad Khani",
    message: " Hi iam a simple person.👋\nInterested for learning 💻 , experiment 👨‍💼 and team working 🤝.\n",
    icons: [{
            image: "fa-github",
            url: "https://github.com/fadaeixlii",
        },
        {
            image: "fa-telegram",
            url: "https://t.me/khakhiany",
        },

        {
            image: "fa-linkedin",
            url: "https://www.linkedin.com/in/mohammad-m-khani-1512b5188/",
        },
        {
            image: "fa-twitter",
            url: "https://twitter.com/fadaeixlii",
        },
    ],
};

const about = {
    show: true,
    heading: "About Me",
    imageLink: require("../editable-stuff/mohammadKhani.jpg"),
    imageSize: 375,
    message: "My name is mohammad mohammad khani.I study at Quchan University of Technology.My goal is to serve the community more with the skills I have and Waiting for the advent of Imam Mahdi",
    resume: "https://docs.google.com/document/d/1CnoJO7ezZhr5ypEOvCK-X4KleLS7v6kmqXEyW0_0RQc/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
    show: true,
    heading: "Recent Projects",
    gitHubUsername: "fadaeixlii", //i.e."johnDoe12Gh"
    reposLength: 4,
    specificRepos: [],
};

// Leadership SECTION

// SKILLS SECTION
const skills = {
    show: true,
    heading: "Skills",
    hardSkills: [
        { name: "React", value: 85 },
        { name: "React Native", value: 65 },
        { name: "GraphQL", value: 60 },
        { name: "NodeJs", value: 50 },
        { name: "JavaScript", value: 90 },
        { name: "C/C++", value: 40 },
        { name: "HTML/CSS", value: 80 },
        { name: "C#", value: 60 },
    ],
    softSkills: [
        { name: "Goal-Oriented", value: 80 },
        { name: "Collaboration", value: 90 },
        { name: "Positivity", value: 95 },
        { name: "Adaptability", value: 70 },
        { name: "Problem Solving", value: 80 },
        { name: "Empathy", value: 90 },
        { name: "Creativity", value: 70 },
    ],
};

// GET IN TOUCH SECTION
const getInTouch = {
    show: true,
    heading: "Get In Touch",
    message: "I'm currently work at 3Gham (Ati-teck) and student in Quchan university of technology and like work part time with new challenges",
    email: "mohammad4252@gmail.com",
};

const experiences = {
    show: true,
    heading: "Experiences",
    data: [{
            role: "React/Front-end developer as 3Gham (ati teck)", // Here Add Company Name
            companylogo: require("../assets/img/3gham.jpg"),
            date: "November 2020 – Present",
        },
        {
            role: "Game and UI/UX developer as parsan",
            // companylogo: require("../assets/img/boeing.png"),
            date: "September 2019 – February 2020",
        },
    ],
};

export { navBar, mainBody, about, repos, skills, getInTouch, experiences };