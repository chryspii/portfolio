import React from "react";
import PropTypes from "prop-types";

const Work = ({ works }) => {
    return (
        <div className="timeline">
            <h2><i className="fa fa-flask"></i>WORK EXPERIENCES</h2>
            {
                works.map((work, i) => (
                    <div className="event" key={i}>
                        <span className="date">{work.startdate}</span>
                        <h4>{work.position}</h4>
                        <h5>{work.company} | {work.location}</h5>
                        <p>{work.text}</p>
                    </div>
                ))
            }
        </div>
    );
};

Work.propTypes = {
    works: PropTypes.array.isRequired
};

export default Work;