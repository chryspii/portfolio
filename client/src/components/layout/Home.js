import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import photo from "../../static/me.png";
import { Link } from "react-router-dom";
import { 
    Image,
    Row,
    Col
} from "react-bootstrap";

import Intro from "./about/Intro";
import Ability from "./about/Ability";
import Work from "./skill/Work";
import Education from "./skill/Education";
import Skill from "./skill/Skill";

const Home = ({ aboutDesc, aboutButtons, aboutSkills, aboutTypes, skill, education, work }) => {
    
    const [display, setDisplay] = useState(false);
    useEffect(() => {
        setTimeout(() => {
           if (aboutSkills.length === 0) setDisplay(true);
        }, 1000);
    }, [aboutSkills]);

    let url_facebook = "https://www.facebook.com/chryspi";
    let url_linkedin = "https://www.linkedin.com/in/chryspii/";
    let url_github = "https://github.com/chryspii";
    let url_skype = "skype:vicky.chryst?call";
    let url_stackoverflow = "https://stackexchange.com/users/17355334/chryspi";

    return (<div id="vs-container" className="container-xl">
        <header className="vs-header header">
            <Image src={photo} alt="avatar" />
            <h1>
                <span className="font-weight-bold">Vicky</span> Chrystian Sugiarto
            </h1>
            <p>Developer</p>
            
            <ul className="vs-nav">
                <li><Link to="#about">about me</Link></li>
                <li><Link to="#portfolio">portfolio</Link></li>
                <li><Link to="#contact">contact</Link></li>
                <li><Link to="#resume">resume</Link></li>
            </ul>
        </header>

        <div className="vs-wrapper wrapper">
            <section id="about" className="page">
                <div className="vs-content content">
                    <Intro texts={aboutTypes} desc={aboutDesc} buttons={aboutButtons} />
                    {
                        aboutSkills.length > 0 ? (
                            <React.Fragment>
                                <h2 className="section-title"><span><i className="fa fa-magic"></i>SKILL</span></h2>        
                                <Ability skills={aboutSkills} />
                            </React.Fragment>       
                        ) : ( 
                            display && (<></>)
                        )
                    }
                </div>
            </section>

            <section id="portfolio" className="page">
                <div className="vs-content content">
                    <h2 className="section-title center"><span><i className="icon-leaf"></i>MY WORKS</span></h2>

                    <h2 className="text-secondary text-center">No portfolio Found</h2>
                </div>
            </section>

            <section id="contact" className="page">
                <div className="vs-content content">
                    <Row>
                        <Col md={6}>
                            <h2 className="section-title"><span><i className="icon-address-book"></i>GET IN TOUCH</span></h2>
                            <div className="letter">
                                <div className="letter-info">
                                    <p><i className="icon-at"></i><Link to="mailto: vicky.chryst@gmail.com">vicky.chryst@gmail.com</Link></p>
                                    <p><i className="icon-phone"></i>+886 908 944 063</p>
                                    <p><i className="icon-location"></i>No. 25, Lane 14, Liren Street, Zhonghe District, New Taipei City, Taiwan</p>
                                </div>               
                            </div>
                        </Col>

                        <Col md={6}>
                            <h2 className="section-title"><span><i className="icon-chat"></i>MY SOCIAL MEDIA</span></h2>
                            <ul className="social">
                                <li><a className="facebook" href={url_facebook} target="_blank" rel="noopener noreferrer">{null}</a></li>
                                <li><a className="linkedin" href={url_linkedin} target="_blank" rel="noopener noreferrer">{null}</a></li>
                                <li><a className="github" href={url_github} target="_blank" rel="noopener noreferrer">{null}</a></li>
                                <li><a className="skype" href={url_skype} target="_blank" rel="noopener noreferrer">{null}</a></li>
                                <li><a className="stack-overflow" href={url_stackoverflow} target="_blank" rel="noopener noreferrer">{null}</a></li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <h2 className="section-title"><span><i className="icon-paper-plane"></i>LEAVE A MESSAGE (UNDER MAINTENANCE)</span></h2>
                            <div className="contact-form">
                                <form id="contact-form" method="post">
                                    <input type="hidden" name="subject" id="subject" value="You have a new message from cvCard!" />
                                    <p>
                                        <label htmlFor="name">NAME</label>
                                        <input type="text" name="name" id="name" className="required" />
                                    </p>
                                    <p>
                                        <label htmlFor="email">EMAIL</label>
                                        <input type="text" name="email" id="email" className="required email" />
                                    </p>
                                    <p>
                                        <label htmlFor="message">MESSAGE</label>
                                        <textarea name="message" id="message" className="required"></textarea>
                                    </p>
                                    <p>
                                        <button type="submit" className="submit button primary" disabled>SEND</button>
                                    </p>
                                </form>
                            </div>
                        </Col>
                    </Row>    				
                </div>
            </section>

            <section id="resume" className="page">
                <div className="vs-content content">
                    <Row>
                        <Col md={7}>
                            <Work works={work} />
                            <Education educations={education} />
                        </Col> 
                        <Skill skills={skill} />
                    </Row>                   
                </div>
            </section>
        </div>
    </div>
    )
};

Home.propTypes = {
    aboutButtons: PropTypes.array.isRequired,
    aboutDesc: PropTypes.array.isRequired,
    aboutSkills: PropTypes.array.isRequired,
    aboutTypes: PropTypes.array.isRequired,
    skill: PropTypes.array.isRequired,
    education: PropTypes.array.isRequired,
    work: PropTypes.array.isRequired,
};

export default Home;