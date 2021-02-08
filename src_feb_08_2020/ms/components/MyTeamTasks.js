import React from "react";
import '../styles/myteamtasks.css';

import Grid from "@material-ui/core/Grid";

const MyTeamTasks = () => {
  return <div>
    <Grid container spacing={4} border={3}>
      <Grid item xs={12}>
        This is My Team Tasks tab
    </Grid>
    </Grid>
  </div>;
};

export default MyTeamTasks;