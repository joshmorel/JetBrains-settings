import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ${NAME} extends Component {
    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        return (
        );
    }
}

${NAME}.propTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(actions, dispatch)
    };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(${NAME});