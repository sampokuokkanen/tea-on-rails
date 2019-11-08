import React　from "react";
import SimpleBottomNavigation from "./SimpleBottomNavigation";
import TeaModalContainer from "./TeaModalContainer";

const TeaIndex = props => {

  return (
    <React.Fragment>
      <TeaModalContainer teas={props.teas} />
      <SimpleBottomNavigation />
    </React.Fragment>
  );
};
export default TeaIndex;
