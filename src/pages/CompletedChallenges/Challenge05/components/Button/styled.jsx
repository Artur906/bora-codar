import styled from "styled-components"

export const StyledButton = styled.div`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4rem;

  box-shadow: 0 2px 4px rgb(0, 0, 0, .27), 
              inset 0px 2px 3px rgb(255, 255, 255, .10),
              0 15px 30px rgb(0, 0, 0, .27);

  color: rgb(255, 255, 255, .50);

  cursor: pointer;

  :active {
    box-shadow: inset 0 2px 4px rgb(0, 0, 0, .27), 
                0px 2px 3px rgb(255, 255, 255, .10), 
                inset 0 15px 30px rgb(0, 0, 0, .27);

    text-shadow: 0 0 4px rgb(255, 255, 255, .50);

    color: rgb(255, 255, 255);
  }
`