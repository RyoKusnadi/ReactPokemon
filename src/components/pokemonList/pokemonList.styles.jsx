import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  max-width: 500px;
  margin: auto;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Inner = styled.div`
  width: 40%;
  background-color: #fff;
  background-color: border-box;
  border: 1px solid rgba(0,0,0,0.125);
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075);
  overflow: hidden;
  margin-bottom: 20px;
`;

export const PokemonItemName = styled.div`
  background-color: #ecd018;
  text-align: center;
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  letter-spacing: 4px;
  text-shadow: 0px 1px 2px rgba(0,0,0,0.4);
`;

export const PokemonItemImage = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PokemonItemImageDetail = styled.img`
  max-width: 100%;
  height: auto;
`;