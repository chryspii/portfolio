import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { 
    Row,
    Col
} from "react-bootstrap";

const Ability = ({ skills }) => {
    function random() {
        let min = 1; 
        let max = 4;  
        return Math.floor(Math.random() * (max - min) + min);
    }

    return (
        <Row>
            <p></p>
            {
                skills.map((skill, i) => (
                    <Col md={4} sm={4} key={i}>
                        <div className={"service color" + random()}>
                            <i className="fas fa-laptop-code"></i>
                            <h4>{skill.title}</h4>
                            <p>{skill.text}</p>
                        </div>
                    </Col>
                ))
            }
        </Row>
    );
};

Ability.propTypes = {
    skills: PropTypes.array.isRequired
};

export default Ability;