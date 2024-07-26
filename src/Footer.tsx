import github from "./assets/git.svg"
import linkedIn from './assets/linkedIn.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-icons d-flex justify-content-center">
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    <img src={linkedIn} alt="LinkedIn" className="social-icon" />
                </a>
                <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" className="social-icon" />
                </a>
                {/* Add more icons as needed */}
            </div>
            <p>&copy; {new Date().getFullYear()} Jonathan Alvarez</p>
        </footer>
    );
};

export default Footer;
