import "./menu.scss"
import {GetApp,LinkedIn,GitHub} from '@material-ui/icons';

export default function Menu({menuOpen, setMenuOpen }) {
    return (
        <div className={"menu "+(menuOpen && "active")}  id="menu">
            <ul>
                <li onClick={ () => setMenuOpen(false)}>
                    <a href="#intro"> Home </a>
                </li>

                <li onClick={ () => setMenuOpen(false)}>
                    <a href="#portfolio"> Certificates </a>
                </li>

                <li onClick={ () => setMenuOpen(false)}>
                    <a href="#testimonials"> Testimonials </a>
                </li>
                <li onClick={ () => setMenuOpen(false)}>
                    <a href="#works"> Works </a>
                </li>
                <li>
                <GetApp className="icon"/>
                <a href='assets/Amine_Resume.pdf' download>  Resume</a>   
                </li>
                <li>
                <GetApp className="icon"/>
                <a href='assets/Sabil_CV.pdf' download>  CV</a>   
                </li>
                <li>
                <LinkedIn className="icon"/>
                <a href="https://www.linkedin.com/in/mohamed-amine-sabil/">  LinkedIn</a>   
                </li>
                <li>
                <GitHub className="icon"/>
                <a href="https://github.com/AmineSabil"> Github</a>   
                </li>
                <li onClick={ () => setMenuOpen(false)}>
                    <a href="#contact"> Contact </a>
                </li>
            </ul>

        </div>
    )
}