import React, { useEffect, useState } from "react";
import RegisterModal from "./RegisterModal";
import TeaCube from "./TeaCube";
import posed from "react-pose";
import styled from "styled-components";

const TeaModalContainer = props => {
  const divProps = {
    open: {
      opacity: 1
    },
    closed: { opacity: 0, delay: 1300 }
  };

  const StyledView = styled(posed.div(divProps))`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
  `;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    setTimeout(setToggle(!toggle), 1000);
  }, []);
  const [toggle, setToggle] = useState(false);

  return (
    <StyledView pose={toggle ? "open" : "closed"}>
      {props.teas.map(tea => (
        <TeaCube key={tea.id} tea={tea} handleOpen={handleOpen} />
      ))}
      <RegisterModal open={open} handleClose={handleClose} />
    </StyledView>
  );
};

export default TeaModalContainer;
