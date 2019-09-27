import React from "react"
import styled from 'styled-components'

const StyledDiv = styled.div`
display: flex;
font-size: 2em;
flex: 1;
background-color: red;
align-items: center;
justify-content: center;
height: 50vh;
`

const Topcomponent = (props) => {
    return (
      <React.Fragment>
        <StyledDiv>
          <p>Hello Rails!</p>
        </StyledDiv>
      </React.Fragment>
    );
}

export default Topcomponent
