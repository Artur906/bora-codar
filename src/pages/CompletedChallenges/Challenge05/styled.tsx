import styled from "styled-components";

export const Card = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
  
  height: max-content;
  width: 100%;
  padding: 4rem 0;
  border-radius: .8rem;
  background: #807ECE;

  display: flex;
  justify-content: center;

  font-family: 'Rubik', sans-serif;
  
`

export const Calculator = styled.div`
  width: 36.5rem;
  height: 56.6rem;
  background: #2D2A37;
  border-radius: 4rem;
  padding: 3.2rem;
  padding-top: 5.3rem;

  box-shadow: 0 8px 17px rgb(0, 0, 0, .27), 
              inset 0px 6px 8px rgb(255, 255, 255, .10), 
              0 30px 30px rgb(0, 0, 0, .27);

  display: flex;
  flex-direction: column;
  justify-content: end;
  row-gap: 2.6rem;
`

export const Screen = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  padding: 0 2.2rem;

  .expression {
    font-size: 2rem;
    line-height: 2.8rem;
    color: #6B6B6B;
  }

  .result {
    height: 5rem;
    font-size: 3.6rem;
    line-height: 5rem;
    display: flex;
    justify-content: space-between;
  }
`

export const Keys = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.2rem;
  justify-content: center;
`