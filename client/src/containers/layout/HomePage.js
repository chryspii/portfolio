import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Home from "../../components/layout/Home";
import { getAbout } from "../../actions/aboutActions";
import { getSkill, getEducation, getWork } from "../../actions/skillActions";

const AboutPage = ({ about, getAbout, skill, getSkill, work, getWork, education, getEducation }) => {
    useEffect(() => {
        getAbout();
        getSkill();
        getEducation();
        getWork();
    }, [getAbout, getSkill, getEducation, getWork]); // biar gak looping forever
    
    // about data
    let aboutDesc = [];
    let aboutButtons = [];
    let aboutSkills = [];
    let aboutTypes = [];

    about.forEach(element => {
        if(element.type === "description")
            aboutDesc.push(element.text)
        else if(element.type === "button")
            aboutButtons.push({
                text: element.text,
                url: element.url
            })
        else if(element.type === "skill")
            aboutSkills.push({
                title: element.title,
                text: element.text,
                icon: element.icon
            })
        else if(element.type === "typewritter") {
            let values = element.text.split(",");
            values.forEach(value => {
                aboutTypes.push(value)
            })
        }
    });

    return <Home
        aboutDesc={aboutDesc}
        aboutButtons={aboutButtons}
        aboutSkills={aboutSkills}
        aboutTypes={aboutTypes}
        skill={skill}
        education={education}
        work={work}
    />
}

const mapStateToProps = state => ({
    about: state.about.about,
    skill: state.skill.skill,
    work: state.skill.work,
    education: state.skill.education
})

AboutPage.propTypes = {
    about: PropTypes.array.isRequired,
    skill: PropTypes.array.isRequired,
    education: PropTypes.array.isRequired,
    work: PropTypes.array.isRequired,
    getAbout: PropTypes.func.isRequired,
    getSkill: PropTypes.func.isRequired,
    getEducation: PropTypes.func.isRequired,
    getWork: PropTypes.func.isRequired,
}

export default connect(
    mapStateToProps,
    { getAbout, getSkill, getEducation, getWork }
)(AboutPage);