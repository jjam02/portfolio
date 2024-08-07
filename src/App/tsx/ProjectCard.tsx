import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/index.css'

interface ProjectCardProps {
    id: number;
    isEven: boolean;
    title: string;
    description: string;
    imgUrl: string;
    link: string;
    repo: string;
    tech: string[];
}

interface TechListProps {
    tech: string[];
}


const TechList: React.FC<TechListProps> = ({ tech }) => {
    return (
        <div>
            {tech.map((technology, index) => (
                <button
                    key={index}
                    className={`btn ${technology.toLowerCase().replace('#', 'Sharp')} m-1`}
                    disabled={true}
                >
                    {technology}
                </button>
            ))}
        </div>
    )
}


const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, imgUrl, link, isEven, tech, repo }) => {
    const alignSide: string = isEven ? "left" : "right";

    return (
        <div key={id} className="row  m-5 mx-auto">
            {alignSide === "left" ? (
                <>
                    <div className="col-12 col-md-6 order-1 order-md-1">
                        <h3>{title}</h3>
                        {imgUrl && <img className="img-fluid" src={imgUrl} alt={title} />}
                    </div>
                    <div className="col-12 col-md-6 order-2 order-md-2">
                        <TechList tech={tech} />
                        <p>{description}</p>
                        <div>
                            {link && <a className="m-3" href={link}><button className="btn btn-primary">Live Link</button></a>}
                            {repo && <a href={repo}><button className="btn btn-primary">Repo</button></a>}
                        </div>

                    </div>
                </>
            ) : (
                <>
                    <div className="col-12 col-md-6 order-1 order-md-2">
                        <h3>{title}</h3>
                        {imgUrl && <img className="img-fluid" src={imgUrl} alt={title} />}
                    </div>
                    <div className="col-12 col-md-6 order-2 order-md-1">
                        <TechList tech={tech} />
                        <p>{description}</p>

                        {link && <a className="m-3" href={link}><button className="btn btn-primary">Live Link</button></a>}
                        {repo && <a href={repo}><button className="btn btn-primary">Repo</button></a>}


                    </div>
                </>
            )}
        </div>
    );
};


export default ProjectCard;