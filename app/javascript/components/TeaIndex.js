import React, {useEffect, useState} from "react";
import TeaCube from "./TeaCube";
import styled from "styled-components";
import RegisterModal from './RegisterModal'
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
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setTimeout(setToggle(!toggle), 1000);
  }, []);
  const [toggle, setToggle] = useState(false)

  return (
    <React.Fragment>
      <StyledView pose={toggle ? 'open' : 'closed'}>
        {props.teas.map(tea => (
          <TeaCube
          handleOpen={handleOpen}
          key={tea.id} 
          tea={tea} />
        ))}
      </StyledView>
      <RegisterModal open={open} handleClose={handleClose} />
      <SimpleBottomNavigation />
    </React.Fragment>
  );
};
export default TeaIndex;