import styled from "styled-components";

export const Aside = styled.aside`
  position: relative;
  min-height: fit-content;
  max-width: fit-content;

  .product-img {
    max-width: 44.9rem;
  }

  button {
    cursor: pointer;
    position: absolute;
    top: 0.8rem;
    right: 5rem;

    background-color: transparent;
    border: none;
  }

  button:hover {
    filter: brightness(2);
  }
`