import React, {useEffect, useState} from "react";
import styled from "styled-components";
import SimpleBottomNavigation from "./SimpleBottomNavigation";
import posed from 'react-pose';
import TeaModalContainer from './TeaModalContainer'

const divProps = {
  open: {
    opacity: 1,
  },
  closed: { opacity: 0, delay: 1300 }
}

const StyledView = styled(posed.div(divProps))`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`

const TeaIndex = props => {

  useEffect(() => {
    setTimeout(setToggle(!toggle), 1000);
  }, []);
  const [toggle, setToggle] = useState(false)

  return (
    <React.Fragment>
      <StyledView pose={toggle ? 'open' : 'closed'}>
        <TeaModalContainer teas={props.teas} />
      </StyledView>
      <SimpleBottomNavigation />
    </React.Fragment>
  );
};
export default TeaIndex;