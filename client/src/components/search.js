import React from 'react';

import { TextField, Grid, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Search = ({ query, handleQueryChange }) => {
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item xs={5}>
        <TextField
          value={query}
          onChange={handleQueryChange}
          fullWidth
          size="medium"
          id="outlined-search"
          type="search"
          variant="outlined"
          placeholder="Search for notes"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="large" />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Search;
