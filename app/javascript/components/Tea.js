import FavoriteIcon from '@material-ui/icons/Favorite';
import axios from 'axios';
import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import SimpleBottomNavigation from "./SimpleBottomNavigation";
import posed from 'react-pose';

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

  const handleInsertIntoFavorites = (id) => {
    let tea = {
      tea: id
    }
    console.log("here now")
    const csrfToken = document.querySelector('[name="csrf-token"]').content;
    axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;
  
    axios.post('/teas', tea).then((response) => {
      console.log(response)
      setLike(!liked)
    });
  } 
  return (
    <React.Fragment>
      <StyledPosedView pose={liked ? 'open' : 'closed'}>
        <StyledP>Name: {tea.name}</StyledP>
        <StyledP>Description: {tea.description}</StyledP>
        <StyledP>Origin: {tea.origin}</StyledP>
        <Icon color={liked ? "secondary" : "primary"} onClick={() => handleInsertIntoFavorites(tea.id)}
        pose={hovering ? "open" : "closed"}
        onMouseEnter={() => setHover({ hovering: true })}
        onMouseLeave={() => setHover({ hovering: false })}
        />
        <StyledBottom style="bottom: 0"/>
      </StyledPosedView>
    </React.Fragment>
  );
};

Tea.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
};
export default Tea;
