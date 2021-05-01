import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types"

import {theme} from "../theme/GlobalStyles"


const Text = styled.h2`
    font-size: ${props => props.title ? "2.5rem" : "1.25rem"};
    padding-top: ${props => props.title ? "2rem" : "none"};
    text-align: ${props => props.title ? "center" : "left"};
`
const Dot = styled.span`
    color: ${theme.magenta};
`

const SubHeading = ({ text, title }) => {
    return (
        <Text title={title}>
            {text}
            <Dot>.</Dot>
        </Text> 
    )
}

SubHeading.propTypes = {
    text: PropTypes.string.isRequired,
    title: PropTypes.bool,
}

export default SubHeading;