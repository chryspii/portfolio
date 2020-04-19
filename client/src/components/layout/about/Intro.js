import React from "react";
import Script from "react-load-script";
import PropTypes from "prop-types";
import { 
    Row,
    Col
} from "react-bootstrap";

const Intro = ({ texts, desc, buttons }) => {
    return (
        <React.Fragment>
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
                                    <a key={i} className="button primary" href={button.url} target="_blank" rel="noopener noreferrer">{button.text}</a>
                                ))
                            }
                        </div>
                    </div>
                </Col>
            </Row>
            <Script url={process.env.PUBLIC_URL + '/js/typewritter.js'} />
        </React.Fragment>
    );
};

Intro.propTypes = {
    texts: PropTypes.array.isRequired,
    desc: PropTypes.array.isRequired,
    buttons: PropTypes.array.isRequired
};

export default Intro;