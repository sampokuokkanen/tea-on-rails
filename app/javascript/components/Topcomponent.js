import React from "react"
import styled from 'styled-components'
import TeaPhoto from '../../assets/images/tea.jpg'
import TeaCube from "./TeaCube";
const Topcomponent = (props) => {
  const StyledDiv = styled.div`
  border-bottom: 5px solid black;
  display: flex;
  font-size: 2em;
  flex: 1;
  background-image: url(${TeaPhoto});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100%;
  color: #FFF;
  `
const StyledP = styled.p`
  height: 3rem;
  padding: 1rem;
  background-color: rgba(0,0,0,0.4);
`

    return (
      <React.Fragment>
        <StyledDiv>
          <StyledP>Welcome to the world of tea!</StyledP>
        </StyledDiv>
      </React.Fragment>
    );
}

export default Topcomponent
