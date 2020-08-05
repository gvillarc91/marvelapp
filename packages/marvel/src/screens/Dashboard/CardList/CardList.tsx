import React from 'react';
import { Card } from '@marvelapp/components';
import { NoResults } from './styles';

const CardList = ({ characters }) =>
  characters.length > 0 ? (
    characters.map((item) => (
      <Card
        name={item.name}
        description={item.description}
        image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
        link={item.urls[1].url}
      />
    ))
  ) : (
    <NoResults>
      <span>No results :(</span>
    </NoResults>
  );
export default CardList;
