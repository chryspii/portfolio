import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Body from "../components/layout/Body";
import { getAbout } from "../actions/aboutActions";
import { ButtonToolbar } from "react-bootstrap";

const AboutPage = ({ about, getAbout }) => {
    useEffect(() => {
        getAbout();
    }, [getAbout]); // biar gak looping forever
    
    let desc = [];
    let buttons = [];
    let skills = [];
    let types = [];

    about.forEach(element => {
        if(element.type === "description")
            desc.push(element.text)
        else if(element.type === "button")
            buttons.push({
                text: element.text,
                url: element.url
            })
        else if(element.type === "skill")
            skills.push({
                title: element.title,
                text: element.text
            })
        else if(element.type === "typewritter") {
            let values = element.text.split(",");
            values.forEach(value => {
                types.push(value)
            })
        }
    });
    console.log(types)

    return <Body about={about} />
}

const mapStateToProps = state => ({
    about: state.about.about
})

AboutPage.propTypes = {
    about: PropTypes.array.isRequired,
    getAbout: PropTypes.func.isRequired
}

export default connect(
    mapStateToProps,
    { getAbout }
)(AboutPage);