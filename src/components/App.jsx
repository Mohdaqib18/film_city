import React, {useRef} from 'react';
import { CssBaseline } from '@mui/material';
import { Switch, Route } from 'react-router-dom';
import useStyles from './styles';
import useAlan from "./Alan";

import { Actors, MovieInformation, Movies, NavBar, Profile } from '.';

const App = () => {
  const classes = useStyles();
  const alanBtnContainer = useRef()
  useAlan();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Switch>

          <Route path="/movies/:id">
            <MovieInformation />
          </Route>
          <Route path="/actors/:id">
            <Actors />
          </Route>
          <Route exact path={["/" , "/approved"]}>
            <Movies />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </main>
      <div ref={alanBtnContainer}/>
    </div>
  );
};

export default App;
