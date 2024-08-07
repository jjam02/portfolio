import { useEffect, useState } from "react";
import setPageTitle from "./Helpers";
import ProjectCard from "./ProjectCard";
import Permanence from "../../assets/permanence.png"
import Geocache from "../../assets/geocache.png"
import Paint from '../../assets/paint.png'
import Clicker from '../../assets/clickerGame.png'
import Grocery from '../../assets/grocery.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/App.css'

interface Project {
    id: number;
    title: string;
    description: string;
    imgUrl: string;
    link: string;
    tech: string[];
    repo: string;
}

function generateProjectData(numProj: number): Project[] {

    for (let i = 0; i < numProj; i++) {
        projects.push({
            id: projects.length,
            title: `Project ${projects.length + 1}`,
            description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Accumsan in praesent phasellus fermentum parturient vehicula duis. Justo fames viverra fringilla consectetur lobortis. Senectus orci vestibulum convallis laoreet ac posuere dapibus interdum purus. Proin netus primis maximus finibus aliquet at augue erat nulla! Morbi pretium aptent massa porta viverra maximus. Blandit praesent nullam vivamus eget augue feugiat. Maximus sapien platea primis euismod eleifend adipiscing rutrum auctor.",
            imgUrl: "https://placehold.co/300x300",
            link: "https://youtube.com",
            tech: ["CSS", "TS", "HTML", "REACT", "JS"],
            repo: "#"
        });
    }
    return projects;
}

let projects: Project[] = [{
    id: 0,
    title: "Permanence Break",
    description: "Permanence Break is a sci-fi first-person puzzle game that challenges players with innovative object-permanence mechanics, where objects behave differently based on whether they are seen. As the lead developer, I designed and implemented these unique mechanics using Unity and C#. Players solve puzzles by strategically choosing where to focus their gaze, moving cubes, pressing buttons, and unlocking doors in a non-linear progression. The game is published on Steam, demonstrating my skills in project management, programming, and UI/UX design.",
    imgUrl: Permanence,
    link: "https://store.steampowered.com/app/2928200/Permanence_Break/",
    tech: ["Unity", "C#"],
    repo: "Steam Page"
}, {
    id: 1,
    title: "Geo-cache game",
    description: "Developed a location-based website using HTML, CSS, and TypeScript, hosted on GitHub Pages. The site employs Leaflet for map integration and tracks the player's location to deterministically spawn caches containing coins. Players can collect coins from caches and deposit them into any other cache. The website utilizes the memento design pattern to remember cache information, enabling efficient unrendering of out-of-range caches and re-rendering when a player approaches.",
    imgUrl: Geocache,
    link: "https://jjam02.github.io/cmpm-121-demo-3/",
    tech: ["HTML", "CSS", "TS"],
    repo: "https://github.com/jjam02/cmpm-121-demo-3"
}, {
    id: 2,
    title: "Grocery List",
    description: "Created a grocery list web application as an introductory project in React. The app allows users to add and delete items, each with a quantity counter to track how much of each item they need. This project provided hands-on experience with fundamental React concepts, including state management, component creation, and form handling, as users interact with the interface to manage their grocery lists.",
    imgUrl: Grocery,
    link: "https://github.com/jjam02/react-grocery",
    tech: ["HTML", "CSS", "JS", "REACT"],
    repo: "https://github.com/jjam02/react-grocery"
}, {
    id: 3,
    title: "Jonathan Paint",
    description: "Developed Jonathan Paint, a drawing application similar to MS Paint, where users can adjust brush thickness and color, use emoji stickers, create custom stickers, and export their drawings. This project involved working with HTML canvases and provided foundational experience in TypeScript, including the use of design patterns and interfaces to define objects.",
    imgUrl: Paint,
    link: "https://jjam02.github.io/cmpm-121-demo-2/",
    tech: ["HTML", "CSS", "TS"],
    repo: "https://github.com/jjam02/cmpm-121-demo-2"
}, {
    id: 4,
    title: "Amp it up!",
    description: "Developed an idle clicker game as an introduction to TypeScript. This project provided practical experience with TypeScript and DOM manipulation, focusing on refactoring code and creating functions with clear, descriptive names and well-defined purposes.",
    imgUrl: Clicker,
    link: "https://jjam02.github.io/cmpm-121-demo-1/",
    tech: ["HTML", "CSS", "TS"],
    repo: "https://github.com/jjam02/cmpm-121-demo-1"
}]

//projects.concat(generateProjectData(2));


const Projects = () => {
    const [data, setData] = useState<Project[]>(projects);
    setPageTitle();
    useEffect(() => {


    }, []);

    return (
        <>
            <h1 className="m-5  text-center display-3" >Projects</h1>
            <div className="container mt-5 mb-0 d-flex flex-column " id="projectsContainer">

                {data.map((project, index) => (
                    <ProjectCard key={project.id} {...project} isEven={index % 2 === 0} />
                ))}


            </div>
        </>
    );
}

export default Projects;
