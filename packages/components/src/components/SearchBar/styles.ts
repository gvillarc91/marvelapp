import styled from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  signUp: '860px',
  desktop: '950px'
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  padding-left: 34px;

  width: 100%;
  height: 60px;

  &&& input {
    width: 490px;
    background: #ffffff;

    border: 2px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 5px;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 135%;

    color: #666666;

    @media (max-width: ${size.desktop}) {
      width: 330px;
    }
  }

  &&&&& i {
    background: #eb2328;
    border-radius: 0px 5px 5px 0px;
    color: #ffffff;
    width: 56px;
  }

  @media (max-width: ${size.desktop}) {
    width: 100%;
    padding-left: 20px;
  }
`;
