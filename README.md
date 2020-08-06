# MarvelApp

MarvelApp is a simple app to query Marvel characters and learn about them.

## Installation
Components (agnostic component library with StoryBook) is consumed by marvelapp (client).
We first build components library and then we start marvelapp (client).

```bash

git clone https://github.com/gvillarc91/marvelapp.git
cd marvelapp/packages/components
yarn install
yarn run build

cd ..

cd marvel
Yarn run start
```
We should see it running on: http://localhost:3000/

## Tooling

- Lerna (package manager to handle packages)
- StoryBook
- Prettier
- ESlint
- Typescript
- React.js 
- Styled Components
  
## StoryBook

Components were built isolated in Storybook. The idea is them to be as dummiest as possible and inject behavior from its context, in the client project.

```bash
cd packages/components/
yarn run start

```
We should see it running on: http://localhost:9000/

## Notes 

1 - When searching for a character, you should enter the character name and then press on Enter. If there is an EXACTLY match, it will bring that result. 
2 - Testing with react-testing-library was not included (time reasons). 
3 - UI interface can have some improvements with more time also. 
