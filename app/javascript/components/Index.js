import React from "react";
import Topcomponent from "./Topcomponent";
import SimpleBottomNavigation from "./SimpleBottomNavigation";
import styled from "styled-components";
import TeaModalContainer from './TeaModalContainer'

const StyledDiv = styled.div`
  display: flex;
`

const Index = props => {
  return (
    <React.Fragment>
      <Topcomponent />
      <StyledDiv>
      <TeaModalContainer teas={props.topcontent}/>
      </StyledDiv>
      <SimpleBottomNavigation />
    </React.Fragment>
  );
};

export default Index;
