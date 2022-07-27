import PropTypes from 'prop-types'
import React, { Component } from 'react'
import BodySection from './BodySection'
import "./BodySectionWithMarginBottom.css"

export default class BodySectionWithMarginBottom extends Component {
    //   static propTypes = {second: third}

    render() {
        return (
            <div className="bodySectionWithMargin">
                <BodySection>{this.props.children}</BodySection>

            </div>
        )
    }
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ])
}