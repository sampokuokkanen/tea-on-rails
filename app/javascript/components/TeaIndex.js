import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import TeaCube from "./TeaCube";
import styled from "styled-components";

import SimpleBottomNavigation from "./SimpleBottomNavigation";
import posed from 'react-pose';

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
        {props.teas.map(tea => (
          <TeaCube key={tea.id} tea={tea} />
        ))}
      </StyledView>
      <SimpleBottomNavigation />
    </React.Fragment>
  );
};

TeaIndex.propTypes = {
  topcontent: PropTypes.array
};
export default TeaIndex;