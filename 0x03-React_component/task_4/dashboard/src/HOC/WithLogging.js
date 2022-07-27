import React from 'react'
// import PropTypes from 'prop-types'

function WithLogging(WrapComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.displayName = WrapComponent.name ? `WithLogging(${WrapComponent.name})` : `WithLogging(Component)`;
          }
          
        componentDidMount() {
            console.log(`Component ${WrapComponent.name ? WrapComponent.name : 'Component'} is mounted`);
        }
        componentWillUnmount() {
            console.log(`Component ${WrapComponent.name ? WrapComponent.name : 'Component'} is going to unmount`);
        }

        render() {
            return (
                <React.Fragment>
                    <WrapComponent {...this.props} />
                </React.Fragment>
            )
        }


    }
}

// WithLogging.propTypes = {}

export default WithLogging
