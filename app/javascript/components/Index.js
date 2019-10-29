import React from "react";
import PropTypes from "prop-types";
import TeaCube from "./TeaCube";
import Topcomponent from "./Topcomponent";
import SimpleBottomNavigation from "./SimpleBottomNavigation";

const Index = props => {
  return (
    <React.Fragment>
      <Topcomponent />
      <ul>
      {props.topcontent.map(tea => (
          <TeaCube key={tea.id} tea={tea} />
        ))}
      </ul>
      <SimpleBottomNavigation />
    </React.Fragment>
  );
};

Index.propTypes = {
  topcontent: PropTypes.array
};
export default Index;
