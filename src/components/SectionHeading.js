import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types"

import {theme} from "../theme/GlobalStyles"

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 3rem;
`
const Text = styled.h2`
    font-size: 1.8rem;
`
const Dot = styled.span`
    color: ${theme.magenta};
`

const SectionHeading = ({ text }) => {
    return (
        <Container>
            <Text>
                {text}
                <Dot>.</Dot>
            </Text>
        </Container>
    )
}

SectionHeading.propTypes = {
    text: PropTypes.string.isRequired,
}

export default SectionHeading;