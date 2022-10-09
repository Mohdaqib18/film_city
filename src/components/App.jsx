import React from 'react';
import { CssBaseline } from '@mui/material';
import { Switch, Route } from 'react-router-dom';
import useStyles from './style';

import { Actors, MovieInformation, Movies, NavBar, Profile } from '.';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Switch>

          <Route path="/movie/:id">
            <MovieInformation />
          </Route>
          <Route path="/actors/:id">
            <Actors />
          </Route>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </main>

    </div>
  );
};

export default App;
