import React from "react";
import PropTypes from "prop-types";
import TeaCube from "./TeaCube";
import Topcomponent from "./Topcomponent";
import SimpleBottomNavigation from "./SimpleBottomNavigation";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
`

const Index = props => {
  return (
    <React.Fragment>
      <Topcomponent />
      <StyledDiv>
        {props.topcontent.map(tea => (
          <TeaCube key={tea.id} tea={tea} />
          ))}
      </StyledDiv>
      <SimpleBottomNavigation />
    </React.Fragment>
  );
};

Index.propTypes = {
  topcontent: PropTypes.array
};
export default Index;
