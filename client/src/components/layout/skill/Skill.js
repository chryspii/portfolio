import React from "react";
import Script from "react-load-script";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

const Skill = ({ skills }) => {
    return (
        <React.Fragment>
            <Col md={5}>
            {
                skills.map((title, i) => (
                    <React.Fragment key={i}>
                        <h2 className="section-title"><span><i className={title.icon}></i>{title.title}</span></h2>
                        <div className="skillset">
                            {
                                title.data.map((subtitle, j) => (
                                    <React.Fragment key={j}>
                                        <h4><b>{subtitle.title}</b></h4>
                                        {
                                            subtitle.data.map((skill, k) => (
                                                <div className="skill-unit" key={k}>
                                                    <h4>{skill.skill}</h4>
                                                    <div className="bar" data-percent={skill.value}>
                                                        <div className="progress"></div>
                                                    </div>
                                                </div>
                                            )) 
                                        }
                                    </React.Fragment>
                                ))
                            }
                        </div>
                    </React.Fragment>
                ))
            }
            </Col>
            <Script url={process.env.PUBLIC_URL + '/js/fillBars.js'} />
        </React.Fragment>
    );
};

Skill.propTypes = {
    skills: PropTypes.array.isRequired
};

export default Skill;