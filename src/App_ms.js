//import './App.css';
//import Sidebar from './components/Sidebar';

import Sidebar from './ms/components/Sidebar';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './ms/pages/Home';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './ms/pages/Team';
import Header from './ms/components/Header';
import AccountOnboarding from './ms/pages/AccountOnboarding'
import MyTasks from './components/MyTasks';
import MyTeamTasks from './components/MyTeamTasks';

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";



function App() {
    return (
        <Router>
            <div>
                <Grid container spacing={0} border={3}>

                    <Grid item xs={12}>
                        <Header />
                    </Grid>


                    <Grid item xs={4}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={8}>

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
                            <Route path='/accountOnboarding' exact component={AccountOnboarding} />
                            <Route path='/accountOnboarding/rmTagging' exact component={AccountOnboarding} />
                            <Route path='/accountOnboarding/kycWriteup' exact component={AccountOnboarding} />
                            <Route path='/accountOnboarding/riskAssessment' exact component={AccountOnboarding} />
                            <Route path='/accountOnboarding/documentUpload' exact component={AccountOnboarding} />
                            <Route path='/accountOnboarding/submit' exact component={AccountOnboarding} />
                        </Switch>
                    </Grid>


                    <Grid item xs={12}>
                        <h6>Footer</h6>
                    </Grid>




                </Grid>
            </div>




        </Router >
    );
}

export default App;
