import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-family: 'Lato', sans-serif;
  padding-bottom: 4rem;

  button {
    cursor: pointer;
    width: fit-content;
    padding: 0.8rem 1.6rem;

    color: #271A45;
    background-color: transparent;

    border: 1px solid #271A45;
    border-radius: 5rem;
  }
  button:hover {
    filter: brightness(2);
  }
`

export const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  span {
    line-height: 1rem;
    font-size: 1rem;
    font-weight: 300;
  }

  h1 {
    font-size: 3.2rem;
    line-height: 3.2rem;
    font-family: 'Crimson Pro', serif;
  }

  p {
    line-height: 1.6rem;
    opacity: .7;
  }
`

