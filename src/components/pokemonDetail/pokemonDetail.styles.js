import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 16px;
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    margin: 16px 16px 0;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  @media (max-width: 800px) {
    justify-content: center;
  }
`
export const Image = styled.img`
    max-height: 100%;
    max-width: 100%;
    height: auto;
    width: auto;
`;

export const PokemonContainer = styled.div`
    width: 100%;
    margin-left: 32px;

    @media (max-width: 800px) {
      margin-left: 0;
      margin-top: 32px;
    }
`;

export const DetailContainer = styled.div`
  justify-content: space-between;
  padding: 16px;
  border-top: #bdbdbd solid 1px;
`;

export const Text = styled.h3`
  height: 18px;
  margin: 10px;
  border-bottom: 10px;
`