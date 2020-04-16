import React from "react";
import photo from "../../static/me.png";
import { Link } from "react-router-dom";
import { 
    Image
} from "react-bootstrap";

const Header = () => (
    <header className="vs-header header">
        <Image src={photo} alt="avatar" />
        <h1>
            <span className="font-weight-bold">Vicky</span> Chrystian Sugiarto
        </h1>
        <p>Full-stack Developer</p>
        
        <ul className="vs-nav">
            <li><Link to="#about">about me</Link></li>
            <li><Link to="#portfolio">portfolio</Link></li>
            <li><Link to="#contact">contact</Link></li>
            <li><Link to="#resume">resume</Link></li>
        </ul>
    </header>
);

export default Header;