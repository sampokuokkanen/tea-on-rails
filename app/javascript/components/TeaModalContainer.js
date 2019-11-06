import React, { useState } from 'react'
import RegisterModal from './RegisterModal'
import TeaCube from "./TeaCube";

const TeaModalContainer = props => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
        {props.teas.map(tea => (
          <TeaCube key={tea.id} tea={tea} handleOpen={handleOpen}/>
          ))}
      <RegisterModal open={open} handleClose={handleClose} />
    </React.Fragment>
  );
};

export default TeaModalContainer;