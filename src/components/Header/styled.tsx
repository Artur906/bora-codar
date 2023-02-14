import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #202020;
`

export const HeaderContainer = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 120rem;
  margin: auto;

  .external-link {
    font-weight: bold;
    color: #d152d1d1;
    text-shadow: 0 0 1rem #ffffff36;
  }
  
  .external-link:hover {
    color: white;
    opacity: 0.8;
    text-shadow: 0 0 3rem #c700c7d1;
  }
`

export const Nav = styled.nav`
  
  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
  }

  li, a {
    height: 100%;
  }

  li a {
    color: #fff;
    position: relative;
    display: block;
    padding: 3rem;
    text-decoration: none;
    border: 1px solid transparent;
    font-weight: bold;
    opacity: 0.5;

    transition: all .3s ease-in-out;
  }

  .selected-page a{
    opacity: 1;
  }

  .selected-page a:before {
    position: absolute;
    content: "";
    width: 100%;
    height: .3rem;
    background-color: gray;
    bottom: 0;
    left: 0;
    border-radius: 1rem 1rem 0 0;

    transition: all .3s ease-in-out;
  }
`