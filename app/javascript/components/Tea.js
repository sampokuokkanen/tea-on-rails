import React from "react"
import PropTypes from "prop-types"
import SimpleBottomNavigation from "./SimpleBottomNavigation";

const Tea = ({tea}) => {
    return (
      <React.Fragment>
        <p>Name: {tea.name}</p>
        <p>Description: {tea.description}</p>
        <p>Origin: {tea.origin}</p>
        <SimpleBottomNavigation />
      </React.Fragment>
    );
}

Tea.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
};
export default Tea
