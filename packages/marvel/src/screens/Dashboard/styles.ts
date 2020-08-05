import styled from 'styled-components';
import { Segment } from 'semantic-ui-react';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  signUp: '860px',
  desktop: '950px'
};

export const Container = styled.div`
  background-color: #e5e5e5;

  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  background-color: #e5e5e5;
  flex-wrap: wrap;

  width: 1300px;
  min-height: 900px;
  margin: auto;

  @media (max-width: ${size.desktop}) {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;

  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 34px;

  width: 100%;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 56px;

  color: #444444;

  @media (max-width: ${size.desktop}) {
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 42px;
    margin-left: 20px;

    color: #444444;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
`;

export const CustomSegment = styled(Segment)`
  &&& {
    width: 100%;
    height:900px;
    border: none;
    box-shadow: none;

    &.ui .dimmer {
      background-color: #e5e5e5;
    }
  }
`;
