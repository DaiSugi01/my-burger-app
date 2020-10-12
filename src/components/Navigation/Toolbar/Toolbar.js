import React from 'react';

import Logo from '../../Logo/Logo';
import classes from './Toolbar.css';

const toolbar = propx => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>
      <ul>
        <li>...</li>
      </ul>
    </nav>
  </header>
);

export default toolbar;