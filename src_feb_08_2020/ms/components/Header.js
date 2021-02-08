import React from 'react'
import Grid from "@material-ui/core/Grid";

import '../styles/Header.css';

const Header = () => {

  return (
    <Grid item xs={12}>
      <div className="Title">
        <h1>NOMURA</h1>
      </div>
    </Grid>
  )
}

export default Header;