import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import useStyles from './Root.styles';
import { Header } from '../../components';
import { AppContext } from '../../context';

function Root({ signOut, user }) {
  const classes = useStyles();

  const { buttonRoute, buttonTitle } = useContext(AppContext);

  return (
    <div className={classes.root}>
      <Header
        buttonRoute={buttonRoute}
        buttonTitle={buttonTitle}
        signOut={signOut}
        user={user}
      />
      <Outlet />
    </div>
  );
}

export default Root;
