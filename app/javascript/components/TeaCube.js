import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import FavoriteIcon from '@material-ui/icons/Favorite';

const StyledView = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  margin: 2rem;
  height: 15rem;
  width: 15rem;
  border: 1px solid green;
  box-shadow: 20px -12px teal;
`;

const StyledP = styled.p`
  font-sze: 2em;
`;

const TeaCube = (props) => {
  const tea = props.tea
  const [liked, setLike] = useState(tea.liked)

  const handleInsertIntoFavorites = (id) => {
    let tea = {
      tea: id
    }
    const csrfToken = document.querySelector('[name="csrf-token"]').content;
    axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;
  
    axios.post('/teas', tea).then((response) => {
      if (response.data === "") {
        props.handleOpen();
      } else {
        console.log(response)
        setLike(!liked)
      }
    });
  } 
  return (
    <React.Fragment>
      <StyledView>
        <StyledP>Name: {tea.name}</StyledP>
        <StyledP>Description: {tea.description}</StyledP>
        <StyledP>Origin: {tea.origin}</StyledP>
        <FavoriteIcon color={liked ? "secondary" : "primary"} onClick={() => handleInsertIntoFavorites(tea.id)}/>
      </StyledView>
    </React.Fragment>
  );
};

TeaCube.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
};
export default TeaCube;
