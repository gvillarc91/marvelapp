import styled from 'styled-components';
import { Button as ButtonUI } from 'semantic-ui-react';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  signUp: '860px',
  desktop: '950px'
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin: 34px;

  width: 346px;
  height: 460px;

  background: #ffffff;

  border: 2px solid #e0e0e0;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: ${size.desktop}) {
    margin: 20px;
  }
`;

export const ImageContainer = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 5px 5px 0px 0px;

  width: 100%;
  height: 230px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 5px 5px 0px 0px;

  width: 100%;
  height: 460px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const TitleDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 20px 12px 0 12px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 135%;

  color: #444444;
`;

export const ContentDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  padding: 0 12px;

  height: 72px;

  overflow: hidden;
  text-overflow: ellipsis;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 135%;

  color: #666666;
`;

export const EmptyDescription = styled(ContentDescription)`
  font-style: italic;
  font-weight: normal;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 24px;

  width: 100%;
`;

export const Button = styled(ButtonUI)`
  &&& {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    height: 48px;

    background: #444444;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 135%;
    color: #ffffff;

    &&&:hover {
      color: #444444;
      background: #ffffff;
      border: 1px solid #444444;
    }
  }
`;
