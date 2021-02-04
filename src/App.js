//import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';
import Header from './components/Header';
import MyTasks from './components/MyTasks';
import MyTeamTasks from './components/MyTeamTasks';

import Grid from "@material-ui/core/Grid";

import Box from "@material-ui/core/Box";

function App() {
  return (
    <Router>
      <Box border={3}>
        <Grid container border={3}>
          <Grid item md={12}>
            <Header />
          </Grid>

          <Grid item md={3}>
            <Sidebar />
          </Grid>

          <Grid item md={9}>
            <Sidebar />
          </Grid>

        </Grid>
      </Box>



      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Redirect exact from="/home" to="/home/mytasks" />
        <Route exact path="/home/:page?" render={props => <Home {...props} />} />

        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/team' exact component={Team} />
      </Switch>
    </Router>
  );
}

export default App;
