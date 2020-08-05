import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../src/components/Card';

const props = {
  name: '3-D Man',
  description:
    "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate!",
  image: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
  link:
    'http://marvel.com/universe/A.I.M.?utm_campaign=apiRef&utm_source=9c970d1b1591ea590ca09a93262b0288'
};

const missingDescProps = {
  name: '3-D Man',
  description: '',
  image: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
  link:
    'http://marvel.com/universe/A.I.M.?utm_campaign=apiRef&utm_source=9c970d1b1591ea590ca09a93262b0288'
};

storiesOf('Card', module).add('Card', () => <Card {...props} />);

storiesOf('Card', module).add('Card Incomplete', () => <Card {...missingDescProps} />);
