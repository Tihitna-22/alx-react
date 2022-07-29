import React from 'react';
import PropTypes from 'prop-types'; // ES6

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let trContent = '';
  const rowStyle = {
    backgroundColor: '#f5f5f5ab'
}
const headStyle = {
    backgroundColor: '#deb5b545'
}

  if (isHeader) {
    if (textSecondCell === null) {
      trContent = (<th colSpan='2' style={ headStyle}>{textFirstCell}</th>);
    }
    else {
      trContent = (<React.Fragment><th style={ headStyle}>{textFirstCell}</th><th>{textSecondCell}</th></React.Fragment>);
    }
  } else {
    trContent = (<React.Fragment><td>{textFirstCell}</td><td>{textSecondCell}</td></React.Fragment>);
  }

  return (<tr style={ rowStyle}>{trContent}</tr>);
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

export default CourseListRow;
