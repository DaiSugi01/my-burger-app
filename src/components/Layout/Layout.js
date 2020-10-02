import React from 'react';

import Aux from '../../hoc/Aux';

const layout = (props) => (
  <Aux>
    <div>Toolbal, SideDrawer, Backdrop</div>
    <main>
      {props.children}
    </main>
  </Aux>
);

export default layout;