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
                    className={`btn ${technology.toLowerCase()} m-1`}
                >
                    {technology}
                </button>
            ))}
        </div>
    )
}


const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, imgUrl, link, isEven, tech }) => {
    const alignSide: string = isEven ? "left" : "right";

    return (
        <div key={id} className="row m-5">
            {alignSide === "left" ? (
                <>
                    <div className="col-12 col-md-6 order-1 order-md-1">
                        <h3>{title}</h3>
                        {imgUrl && <img src={imgUrl} alt={title} />}
                    </div>
                    <div className="col-12 col-md-6 order-2 order-md-2">
                        <TechList tech={tech} />
                        <p>{description}</p>
                        {link && <a href={link}>More Info</a>}
                    </div>
                </>
            ) : (
                <>
                    <div className="col-12 col-md-6 order-1 order-md-2">
                        <h3>{title}</h3>
                        {imgUrl && <img src={imgUrl} alt={title} />}
                    </div>
                    <div className="col-12 col-md-6 order-2 order-md-1">
                        <TechList tech={tech} />
                        <p>{description}</p>
                        {link && <a href={link}>More Info</a>}
                    </div>
                </>
            )}
        </div>
    );
};


export default ProjectCard;