import FavoriteIcon from '@material-ui/icons/Favorite';
import axios from 'axios';
import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import SimpleBottomNavigation from "./SimpleBottomNavigation";
import posed from 'react-pose';
import handleInsertIntoFavorites from './handleInsertIntoFavorites'
import RegisterModal from './RegisterModal'

const divProps = {
  open: { opacity: 1 },
  closed: { opacity: 0.7 },
}
const Icon = posed(FavoriteIcon)({
  open: { opacity: 1 },
  closed: { opacity: 0.7 },
})
const StyledPosedView = styled(posed.div(divProps))`
display: flex;
min-height: 100vh;
flex-direction: column;
padding: 1rem;
`

const StyledBottom = styled(SimpleBottomNavigation)`
position: sticky; 
margin-top: 200px;
`

const StyledP = styled.p`
  font-sze: 2em;
`;

const Tea = ({ tea }) => {
  const [liked, setLike] = useState(tea.liked)
  const [hovering, setHover] = useState(false)
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <StyledPosedView pose={liked ? 'open' : 'closed'}>
        <StyledP>Name: {tea.name}</StyledP>
        <StyledP>Description: {tea.description}</StyledP>
        <StyledP>Origin: {tea.origin}</StyledP>
        <Icon color={liked ? "secondary" : "primary"} onClick={() => handleInsertIntoFavorites(tea.id, handleOpen, setLike)}
        pose={hovering ? "open" : "closed"}
        onMouseEnter={() => setHover({ hovering: true })}
        onMouseLeave={() => setHover({ hovering: false })}
        />
        <StyledBottom style="bottom: 0"/>
        <RegisterModal open={open} handleClose={handleClose} />
      </StyledPosedView>
    </React.Fragment>
  );
};

Tea.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
};
export default Tea;
