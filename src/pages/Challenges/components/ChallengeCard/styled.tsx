import styled from "styled-components";
import { Link } from "react-router-dom";


export const Card = styled(Link)`
  display: flex;
  flex-direction: column;

  max-width: 30rem;  

  background-image: linear-gradient(to bottom, transparent, #131212 70%) ;
  border: 1px solid #000000ae;
  border-radius: .8rem;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 1.6;
  }
`

export const CardImg = styled.img`
  border-radius: 1.6rem;
  padding: 1rem;
  z-index: 10;
  height: 17.3rem;
`

export const CardDescrition = styled.div`
  padding: 1rem;
  gap: 1rem;

  color: white;
  display: flex;
  flex-direction: column;

  h1 {
    line-height: 3.2rem;
    text-align: center;
  }

  p {
    text-align: center;
  }
` 