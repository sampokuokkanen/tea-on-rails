import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import SimpleBottomNavigation from "./SimpleBottomNavigation";
import FavoriteIcon from '@material-ui/icons/Favorite';
import axios from 'axios'
import { RSA_PKCS1_OAEP_PADDING } from "constants";

const StyledView = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const StyledP = styled.p`
  font-sze: 2em;
`;

const Tea = ({ tea }) => {
  const [liked, setLike] = useState(tea.liked)

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
      <StyledView>
        <StyledP>Name: {tea.name}</StyledP>
        <StyledP>Description: {tea.description}</StyledP>
        <StyledP>Origin: {tea.origin}</StyledP>
        <FavoriteIcon color={liked ? "secondary" : "primary"} onClick={() => handleInsertIntoFavorites(tea.id)}/>
        <SimpleBottomNavigation />
      </StyledView>
    </React.Fragment>
  );
};

Tea.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
};
export default Tea;
