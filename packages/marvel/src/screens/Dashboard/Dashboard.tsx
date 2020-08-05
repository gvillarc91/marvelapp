import React, { useEffect } from 'react';
import { Card } from '@marvelapp/components';
import { Wrapper, Title, Row, CardContainer, Container, CustomSegment } from './styles';
import { Dimmer, Loader } from 'semantic-ui-react';

const Dashboard = ({ getDashboard, characters, isLoading }) => {
  useEffect(() => {
    getDashboard();
  }, [getDashboard]);

  return (
    <Container>
      <Wrapper>
        <Row>
          <Title>Search your character</Title>
        </Row>
        <Row>
          <CardContainer>
            {isLoading ? (
              <CustomSegment>
                <Dimmer active inverted>
                  <Loader size="massive">Loading</Loader>
                </Dimmer>
              </CustomSegment>
            ) : (
              characters.map((item) => (
                <Card
                  name={item.name}
                  description={item.description}
                  image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  link={item.urls[1].url}
                />
              ))
            )}
          </CardContainer>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
