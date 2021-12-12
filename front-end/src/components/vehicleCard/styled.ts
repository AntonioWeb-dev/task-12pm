import styled from 'styled-components';

export const CardContainter = styled.div`
  background: white;
  display: grid;
  justify-items: center;
  width: 80%;
  padding: 0px 0px 10px 0px;
  border-radius: 3px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.4);

  p {
    font-style: italic;
    font-weight: bold;
  }
  ul {
    width: 70%;
    display: grid;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
    border: 1px solid #d1d1d1;
    border-radius: 3px;

  }
  li {
    width: 80%;
    display: flex;
    align-items: center;
    gap: 7px;
    color: gray;
    p {
      color: black;
      font-weight: bold;
    }
  }
`;