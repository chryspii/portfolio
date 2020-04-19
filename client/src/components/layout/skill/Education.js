import React from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";

const Education = ({ educations }) => {
    return (
        <div className="timeline">
            <h2><i className="icon-college"></i>EDUCATIONS</h2>
            {
                educations.map((work, i) => (
                    <div className="event" key={i}>
                        <span className="date">{work.startdate}</span>
                        <h4>{work.major}</h4>
                        <h5>{work.school} | {work.location}</h5>
                        <Table className="table-borderless text-left" style={{ margin: ".6em 0 .2em 0" }}>
                            <tbody>
                                <tr>
                                    <td>Period</td>
                                    <td>:</td>
                                    <td>{work.startdate} - {work.enddate}</td>
                                </tr>
                                <tr>
                                    <td>Degree</td>
                                    <td>:</td>
                                    <td>{work.degree}</td>
                                </tr>
                                <tr>
                                    <td>GPA</td>
                                    <td>:</td>
                                    <td>{work.gpa}</td>
                                </tr>
                                <tr>
                                    <td>Research</td>
                                    <td>:</td>
                                    <td>{work.research}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <p className="m-0"></p>
                    </div>
                ))
            }
        </div>
    );
};

Education.propTypes = {
    educations: PropTypes.array.isRequired
};

export default Education;