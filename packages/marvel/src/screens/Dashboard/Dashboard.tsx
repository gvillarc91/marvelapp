import React, { useEffect, useState } from 'react';
import CardList from './CardList';
import { Wrapper, Title, Row, CardContainer, Container, CustomSegment } from './styles';
import { Dimmer, Loader } from 'semantic-ui-react';
import { SearchBar } from '@marvelapp/components';

const Dashboard = ({ getDashboard, characters, isLoading }) => {
  const [partialResults, setPartialResults] = useState([]);

  useEffect(() => {
    getDashboard();
  }, [getDashboard]);

  useEffect(() => {
    setPartialResults(characters);
  }, [characters]);

  const updateText = (text) => {
    if (!text) {
      setPartialResults(characters);
      return;
    }
    const results = characters.filter((item) => item.name === text);
    setPartialResults(results);
  };

  return (
    <Container>
      <Wrapper>
        <Row>
          <Title>Search your character</Title>
        </Row>
        <Row>
          <SearchBar results={characters} updateText={updateText} />
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
              <CardList characters={partialResults} />
            )}
          </CardContainer>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
