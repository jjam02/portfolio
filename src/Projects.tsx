import { useEffect, useState } from "react";
import setPageTitle from "./Helpers";
import ProjectCard from "./ProjectCard";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

interface Project {
    id: number;
    title: string;
    description: string;
    imgUrl: string;
    link: string;
    tech: string[];
}

function generateProjectData(numProj: number): Project[] {
    const projects: Project[] = [];
    for (let i = 0; i < numProj; i++) {
        projects.push({
            id: i,
            title: `Project ${i + 1}`,
            description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Accumsan in praesent phasellus fermentum parturient vehicula duis. Justo fames viverra fringilla consectetur lobortis. Senectus orci vestibulum convallis laoreet ac posuere dapibus interdum purus. Proin netus primis maximus finibus aliquet at augue erat nulla! Morbi pretium aptent massa porta viverra maximus. Blandit praesent nullam vivamus eget augue feugiat. Maximus sapien platea primis euismod eleifend adipiscing rutrum auctor.",
            imgUrl: "https://placehold.co/300x300",
            link: "https://youtube.com",
            tech: ["CSS", "TS", "HTML", "REACT", "JS"]
        });
    }
    return projects;
}

const Projects = () => {
    const [data, setData] = useState<Project[]>([]);
    setPageTitle();
    useEffect(() => {

        setData(generateProjectData(5));
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="m-5 text-center" >Projects</h1>
            {data.map((project, index) => (
                <ProjectCard key={project.id} {...project} isEven={index % 2 === 0} />
            ))}


        </div>
    );
}

export default Projects;
