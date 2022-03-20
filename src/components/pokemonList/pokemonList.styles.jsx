import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  justify-content: space-between;
`;

export const PokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const BackgroundDiv = styled.div`
  background-color: #ecd018;
  text-align: center;
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  letter-spacing: 4px;
  text-shadow: 0px 1px 2px rgba(0,0,0,0.4);
  margin: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 0.3s;
  border-radius: 5px;
  cursor: pointer;
`;

export const IdNumber = styled.div`
  border-radius: 1rem;
  padding: 0.2rem 0.4rem;
  background-color: rgba(255,255,255,0.3);
`;

export const PokemonImg = styled.img`
  width: 120px;
  height: 120px;
  align-items: center;
  justify-content: center;
`;

export const PokemonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PokemonTitle = styled.h3`
  background-color:#00G1FD;
  margin-bottom: 0.2rem;
`;

export const Button = styled.button`
  color: rgb(22, 22, 22);
  padding: .5rem;
  margin-top: 1rem;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.185);
  display: flex;
  font-size: 14px;
`;