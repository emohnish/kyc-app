import React from "react";
//import '../styles/mytasks.css';

import Grid from "@material-ui/core/Grid";


const MyTasks = () => {
  return <div>
    <Grid container spacing={4} border={3}>
      <Grid item xs={12}>
        This is MyTasks tab
      </Grid>
    </Grid>
  </div>;
};

export default MyTasks;