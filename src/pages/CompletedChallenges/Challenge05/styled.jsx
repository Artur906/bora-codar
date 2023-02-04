import styled from "styled-components";

export const Card = styled.div`
  height: max-content;
  width: 100%;
  background: #807ECE;
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  border-radius: .8rem;
`

export const Calculator = styled.div`
  width: 36.5rem;
  height: 56.6rem;
  background: #2D2A37;
  border-radius: 4rem;
  padding: 3.2rem;

  box-shadow: 0 8px 17px rgb(0, 0, 0, .27), inset 0px 6px 8px rgb(255, 255, 255, .10), 0 30px 30px rgb(0, 0, 0, .27);

  display: flex;
  flex-direction: column;
  row-gap: 2.6rem;
`

export const Screen = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Keys = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.2rem;
  justify-content: center;

  
`