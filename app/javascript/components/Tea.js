import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import SimpleBottomNavigation from "./SimpleBottomNavigation";

const StyledView = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  color: red;
`;

const StyledP = styled.p`
  font-sze: 2em;
`;

const Tea = ({ tea }) => {
  return (
    <React.Fragment>
      <StyledView>
        <StyledP>Name: {tea.name}</StyledP>
        <StyledP>Description: {tea.description}</StyledP>
        <StyledP>Origin: {tea.origin}</StyledP>
        <SimpleBottomNavigation />
      </StyledView>
    </React.Fragment>
  );
};

Tea.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
};
export default Tea;
