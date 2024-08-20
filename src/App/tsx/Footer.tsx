import { Color } from "p5"
import github from "../../assets/git.svg"
import linkedIn from '../../assets/linkedIn.svg'


const Footer = () => {
    return (
        <footer className="footer mt-3" style={{ background: "#212529" }}>
            <div className="social-icons d-flex justify-content-center">
                <a href="https://www.linkedin.com/in/jonathan-alvarez-a99b8a1aa/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedIn} alt="LinkedIn" className="social-icon" />
                </a>
                <a href="https://github.com/jjam02" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" className="social-icon" />
                </a>
                {/* Add more icons as needed */}
            </div>
            <p>&copy; {new Date().getFullYear()} Jonathan Alvarez</p>
        </footer>
    );
};

export default Footer;
