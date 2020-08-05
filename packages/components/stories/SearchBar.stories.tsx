import * as React from 'react';
import { storiesOf } from '@storybook/react';
import SearchBar from '../src/components/SearchBar';

const characters = [];

storiesOf('Search Bar', module).add('Search Bar', () => <SearchBar {...characters} />);
