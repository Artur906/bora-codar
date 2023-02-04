import styled from "styled-components";

export const Card = styled.section`
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@600&family=Lato:wght@300;400&display=swap');
  max-width: 95rem;
  height: 50rem;
  border-radius: .8rem;
  font-family: 'Lato', sans-serif;
  margin: auto;
  

  color: #271A45;
  background-color: #D9CDF7;
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    &{
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      max-width: 100%;
    }

    img {
      width: 100%;
      border-radius: 1.6rem;
    }
  }
`