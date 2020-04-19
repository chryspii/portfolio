import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import photo from "../../static/me.png";
import { Link } from "react-router-dom";
import { 
    Image,
    Row,
    Col,
    Table
} from "react-bootstrap";

import Intro from "./about/Intro";
import Ability from "./about/Ability";

const Home = ({ aboutDesc, aboutButtons, aboutSkills, aboutTypes }) => {
    
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

                    <div className="portfolio-items media-grid" data-layout="masonry">
                        <article className="media-cell coding hentry">
                            <div className="media-box">
                                <Image src="images/portfolio/no-image-1.png" alt="post-image" />
                                <div className="mask"></div>
                                <Link to="#" data-toggle="modal" data-target="#exampleModal"></Link>
                            </div>
                            <header className="media-cell-desc">
                                <span title="2013" className="date"><span className="day">18</span>oct</span>
                                <h3>20 Best Practices For Designing Better UIs</h3>
                            </header>
                        </article>
                        <article className="media-cell coding hentry">
                            <div className="media-box">
                                <Image src="images/portfolio/no-image-2.png" alt="post-image" />
                                <div className="mask"></div>
                                <Link to="#" data-toggle="modal" data-target="#exampleModal"></Link>
                            </div>
                            <header className="media-cell-desc">
                                <span title="2013" className="date"><span className="day">18</span>oct</span>
                                <h3>20 Best Practices For Designing Better UIs</h3>
                            </header>
                        </article>
                    </div>
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
                            <h2 className="section-title"><span><i className="icon-paper-plane"></i>LEAVE A MESSAGE</span></h2>
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
                                        <input type="submit" className="submit button primary" value="SEND" />
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
                            <div className="timeline">
                                <h2><i className="fa fa-flask"></i>WORK EXPERIENCES</h2>
                                <div className="event">
                                    <span className="date">2016</span>
                                    <h4>IT Staff</h4>
                                    <h5>CV. Karya Hidup Sentosa | Indonesia</h5>
                                    <p>I worked as an IT Staff at CV. KHS for 1 year and 2 months. My job is to Innovate and develop web-based applications to help and accelerate the company's business processes. Using PHP as Server-side programming language and Code Igniter (CI) as the framework. The Database used is PostgreSQL and Oracle DB. Combine the current web application with Oracle ERP to easily help the custom process needed.</p>
                                </div>
                                <div className="event">
                                    <span className="date">2015</span>
                                    <h4>Internship</h4>
                                    <h5>PT. Pertamina (Persero) |  Indonesia</h5>
                                    <p>I worked as an Internship at PT. Pertamina for 3 months. My job is to Develop web-based applications to help organizing the company’s document management. Using ASP.NET as a programming language. The Database used is Microsoft SQL Server.</p>
                                </div>
                            </div>
                            <div className="timeline">
                                <h2><i className="icon-college"></i>EDUCATIONS</h2>
                                <div className="event">
                                    <span className="date">2018</span>
                                    <h4>Industrial Management</h4>
                                    <h5>National Taiwan University of Science and Technology | Taiwan</h5>
                                    <Table className="table-borderless text-left" style={{ margin: ".6em 0 .2em 0" }}>
                                        <tbody>
                                            <tr>
                                                <td>Period</td>
                                                <td>:</td>
                                                <td>2018 - 2020</td>
                                            </tr>
                                            <tr>
                                                <td>Degree</td>
                                                <td>:</td>
                                                <td>Master</td>
                                            </tr>
                                            <tr>
                                                <td>GPA</td>
                                                <td>:</td>
                                                <td>3.84 out of 4.30</td>
                                            </tr>
                                            <tr>
                                                <td>Research</td>
                                                <td>:</td>
                                                <td>Blockchain and Distributed File System</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <p className="m-0"></p>
                                </div>
                                <div className="event">
                                    <span className="date">2012</span>
                                    <h4>Computer Science</h4>
                                    <h5>Institut Teknologi Sepuluh Nopember | Indonesia</h5>
                                    <Table className="table-borderless text-left" style={{ margin: ".6em 0 .2em 0" }}>
                                        <tbody>
                                            <tr>
                                                <td>Period</td>
                                                <td>:</td>
                                                <td>2012 - 2016</td>
                                            </tr>
                                            <tr>
                                                <td>Degree</td>
                                                <td>:</td>
                                                <td>Bachelor</td>
                                            </tr>
                                            <tr>
                                                <td>GPA</td>
                                                <td>:</td>
                                                <td>3.54 out of 4.00</td>
                                            </tr>
                                            <tr>
                                                <td>Research</td>
                                                <td>:</td>
                                                <td>Enterprize Resource Planning Application</td>
                                            </tr>
                                            </tbody>
                                    </Table>
                                    <p className="m-0"></p>
                                </div>
                            </div>
                        </Col> 
                        <Col md={5}>
                            <h2 className="section-title"><span><i className="icon-cog-1"></i>DEVELOPMENT SKILLS</span></h2>
                            <div className="skillset">
                                <h4><b>Web Application</b></h4>
                                <div className="skill-unit">
                                    <h4>HTML5, CSS3</h4>
                                    <div className="bar" data-percent="100">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                                <div className="skill-unit">
                                    <h4>Javascript (ES5, ES6)</h4>
                                    <div className="bar" data-percent="100">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                                <div className="skill-unit">
                                    <h4>ReactJS</h4>
                                    <div className="bar" data-percent="45">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                                <div className="skill-unit">
                                    <h4>jQuery, Ajax</h4>
                                    <div className="bar" data-percent="85">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                                <div className="skill-unit">
                                    <h4>JSON</h4>
                                    <div className="bar" data-percent="90">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                                <div className="skill-unit">
                                    <h4>NodeJS (Express)</h4>
                                    <div className="bar" data-percent="100">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                                <div className="skill-unit">
                                    <h4>PHP (CI, Yii)</h4>
                                    <div className="bar" data-percent="95">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                                <div className="skill-unit">
                                    <h4>SQL (MySQL, PostgreSQL, Oracle)</h4>
                                    <div className="bar" data-percent="85">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                                <div className="skill-unit">
                                    <h4>NoSQL (MongoDB)</h4>
                                    <div className="bar" data-percent="80">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                                <div className="skill-unit">
                                    <h4>XAMPP/LAMPP</h4>
                                    <div className="bar" data-percent="90">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                                <div className="skill-unit">
                                    <h4>Google Cloud Platform</h4>
                                    <div className="bar" data-percent="70">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                                <div className="skill-unit">
                                    <h4>Amazon Web Service (S3)</h4>
                                    <div className="bar" data-percent="70">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                                <div className="skill-unit">
                                    <h4>Blockchain</h4>
                                    <div className="bar" data-percent="40">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                                <h4><b>Mobile Application</b></h4>
                                <div className="skill-unit">
                                    <h4>Android (Java)</h4>
                                    <div className="bar" data-percent="35">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                                <div className="skill-unit">
                                    <h4>iOS</h4>
                                    <div className="bar" data-percent="40">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                                <h4><b>Other</b></h4>
                                <div className="skill-unit">
                                    <h4>Python</h4>
                                    <div className="bar" data-percent="80">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                                <div className="skill-unit">
                                    <h4>Git</h4>
                                    <div className="bar" data-percent="90">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                                <div className="skill-unit">
                                    <h4>Elasticsearch, Logstash, Kibana (ELK)</h4>
                                    <div className="bar" data-percent="75">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                                <div className="skill-unit">
                                    <h4>Docker</h4>
                                    <div className="bar" data-percent="40">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                                <div className="skill-unit">
                                    <h4>Machine Learning</h4>
                                    <div className="bar" data-percent="70">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                                <div className="skill-unit">
                                    <h4>Deep Learning</h4>
                                    <div className="bar" data-percent="60">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                            </div>

                            <h2 className="section-title"><span><i className="icon-brush"></i>DESIGN SKILLS</span></h2>
                            <div className="skillset">
                                <div className="skill-unit">
                                    <h4>Adobe Photoshop</h4>
                                    <div className="bar" data-percent="90">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                                <div className="skill-unit">
                                    <h4>Adobe Illustrator</h4>
                                    <div className="bar" data-percent="75">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                                <div className="skill-unit">
                                    <h4>Corel Draw</h4>
                                    <div className="bar" data-percent="85">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                                <div className="skill-unit">
                                    <h4>Camtasia</h4>
                                    <div className="bar" data-percent="85">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                            </div>

                            <h2 className="section-title"><span><i className="icon-child"></i>PERSONAL SKILLS</span></h2>
                            <div className="skillset">
                                <div className="skill-unit">
                                    <h4>Self Management</h4>
                                    <div className="bar" data-percent="90">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                                <div className="skill-unit">
                                    <h4>Public Speech</h4>
                                    <div className="bar" data-percent="85">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                            </div>

                            <h2 className="section-title"><span><i className="icon-globe"></i>LANGUAGE</span></h2>
                            <div className="skillset">
                                <div className="skill-unit">
                                    <h4>Bahasa</h4>
                                    <div className="bar" data-percent="100">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                                <div className="skill-unit">
                                    <h4>English</h4>
                                    <div className="bar" data-percent="85">
                                        <div className="progress"></div>
                                    </div>
                                </div>
                            </div>
                        </Col>
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
    aboutSkills: PropTypes.array.isRequired,
};

export default Home;