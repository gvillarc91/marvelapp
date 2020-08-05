import React from 'react';
import 'typeface-roboto';
import {
  Wrapper,
  ImageContainer,
  Description,
  Row,
  TitleDescription,
  ContentDescription,
  ButtonContainer,
  Button,
  EmptyDescription
} from './styles';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Card = ({ name, description, image, link }) => (
  <Wrapper>
    <ImageContainer src={image} />
    <Description>
      <Row>
        <TitleDescription>{name}</TitleDescription>
      </Row>
      <Row>
        {description ? (
          <ContentDescription>{description}</ContentDescription>
        ) : (
          <EmptyDescription>(No description Available)</EmptyDescription>
        )}
      </Row>
      <Row>
        <ButtonContainer>
          <Button onClick={() => window.open(link, '_blank')}>
            Read More <Icon name="arrow right" />
          </Button>
        </ButtonContainer>
      </Row>
    </Description>
  </Wrapper>
);

export default Card;
