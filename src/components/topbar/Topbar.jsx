import "./topbar.scss"
import {Email,Person} from '@material-ui/icons';

export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}  >
            <div className="wrapper">
                 <div className="left">
                     <a href="#intro" className="logo"> M. Amine SABIL </a>
                     <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+33 7 53 26 09 98</span>
                     </div>
                     <div className="itemContainer">
                        <Email className="icon"/>
                        <span>aminesabil2000@gmail.com</span>
                     </div>
                 </div>
                 <h1>Hello</h1>
                 <div className="right">
                     <div className="hamburger" onClick={ () => setMenuOpen(!menuOpen)}>
                         <span className="line1"> </span>
                         <span className="line2"> </span>
                         <span className="line3"> </span>
                     </div>
                 </div>

            </div>
        </div>
    )
}