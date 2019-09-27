import React from "react";
import PropTypes from "prop-types";
import Tea from "./Tea";
import Topcomponent from "./Topcomponent";
import SimpleBottomNavigation from "./SimpleBottomNavigation";
const Index = props => {
  return (
    <React.Fragment>
      <Topcomponent />
      <ul>
        {props.topcontent.map(user => (
          <li key={user.id}>{`${user.f_name} ${user.l_name}`}</li>
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
