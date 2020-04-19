import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { 
    Row,
    Col
} from "react-bootstrap";

const Intro = ({ texts, desc, buttons }) => {
    return (
        <Row>
            <Col md={12}>
                <h2 className="section-title"><span><i className="icon-guest"></i>A LITTLE ABOUT ME</span></h2>

                <div className="intro">
                    <h2>
                        Hi. I am
                        <ul id="typewritter">
                            {
                                texts.map((text, i) => (
                                    <li key={i}>{text}</li>
                                ))
                            }
                        </ul>
                        <span className="secondary__title"> </span>
                    </h2>    
                        <p dangerouslySetInnerHTML={{__html: desc[0]}} />
                </div>

                <div className="d-flex justify-content-center">
                    <div className="download-button">
                        {
                            buttons.map((button, i) => (
                                <Link key={i} to="#" className="button primary">{button.text}</Link>
                            ))
                        }
                    </div>
                </div>
            </Col>
        </Row>
    );
};

Intro.propTypes = {
    texts: PropTypes.array.isRequired,
    desc: PropTypes.array.isRequired,
    buttons: PropTypes.array.isRequired
};

export default Intro;