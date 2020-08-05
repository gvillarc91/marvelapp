import React, { useState } from 'react';

import { Wrapper } from './styles';
import { Search as SearchUI } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const SearchBar = ({ results, updateText }) => {
  const [value, setValue] = useState<string | null>(null);
  return (
    <Wrapper>
      <SearchUI
        size="big"
        icon="search"
        placeholder="Name of Character"
        results={results}
        open={false}
        onSearchChange={(_, data) => {
          setValue(data.value ? data.value : null);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') updateText(value);
        }}
      />
    </Wrapper>
  );
};

export default SearchBar;
