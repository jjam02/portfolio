import React from "react";
import setPageTitle from "./Helpers";
import projectIcon from "../../assets/projectIcon.svg"
import { Link } from "react-router-dom";
import '../css/index.css'

const Home = () => {
    setPageTitle();
    return (
        <div className=" mt-5 home-container ">
            <h1 className="display-1">Jonathan Alvarez</h1>
            <h3>Frontend WebDev</h3>
            <h5>Los Angeles, California</h5>
            <div className=" gap-5 mt-5 btn-container">
                <a href="mailto:Jon.Jalva02@gmail.com">
                    <button className="btn btn-primary">
                        <svg className="homepage-icon"
                            width="50px"
                            height="50px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                                fill="#080341"
                            />
                        </svg>
                        Jon.Jalva02@gmail.com
                    </button>
                </a>
                <Link to="/resume">
                    <button className="btn btn-primary">
                        <svg className="homepage-icon"
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 128 128"
                        >
                            <path d="M30.13 51.31h20a1.75 1.75 0 0 0 1.75-1.75v-5.12a11.067 11.067 0 0 0-4.4-8.832 9.977 9.977 0 1 0-14.713 0 11.08 11.08 0 0 0-4.387 8.832v5.12a1.75 1.75 0 0 0 1.75 1.75zm10-28.894a6.477 6.477 0 1 1-6.477 6.477 6.485 6.485 0 0 1 6.473-6.476zM31.88 44.44a7.576 7.576 0 0 1 3.87-6.594 9.857 9.857 0 0 0 8.754 0 7.56 7.56 0 0 1 3.876 6.594v3.37h-16.5z" />
                            <path d="M112.654 4.75H15.346A1.75 1.75 0 0 0 13.6 6.5v115a1.75 1.75 0 0 0 1.75 1.75h97.308a1.75 1.75 0 0 0 1.75-1.75V6.5a1.75 1.75 0 0 0-1.754-1.75zm-1.75 115H17.1V8.25h93.8z" />
                            <path d="M26.346 65.75h75.308a1.75 1.75 0 1 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM26.346 80.194h75.308a1.75 1.75 0 0 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM26.346 109.083h75.308a1.75 1.75 0 0 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM26.346 94.639h75.308a1.75 1.75 0 1 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM64 22.417h37.654a1.75 1.75 0 0 0 0-3.5H64a1.75 1.75 0 0 0 0 3.5zM64 36.861h37.654a1.75 1.75 0 0 0 0-3.5H64a1.75 1.75 0 0 0 0 3.5zM64 51.306h37.654a1.75 1.75 0 0 0 0-3.5H64a1.75 1.75 0 0 0 0 3.5z" />
                        </svg>
                        Resume
                    </button>
                </Link>
                <Link to="/projects">
                    <button className="btn btn-primary">
                        <img className="homepage-icon img-fluid" src={projectIcon} />
                        <span>  Projects</span>
                    </button>
                </Link>
            </div>


        </div>
    );
};

export default Home;
