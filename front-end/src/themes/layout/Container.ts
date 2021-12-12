import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  h1 {
    text-align: center;
  }
`;

export const MainContainer = styled.div<{ columnQuantity: string }>`
  display: grid;
  grid-template-columns: ${({ columnQuantity }) => `repeat(${columnQuantity}, 1fr)`}; 
  justify-items: center;
  padding: 10px 3px 10px 3px;
  gap: 15px;
  min-width: 300px;
  width: 90%;
  min-height: 300px;
  height: 100%;
  border-radius: 2px;
  background: #f1f1f1;
  h1 {
    width: 100%;
    text-align: center;
  }
  @media screen and (min-width: 720px) {
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 300px);
  }
`;