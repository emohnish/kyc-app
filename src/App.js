import "./App.css";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from "./pages/Reports";
import Onboarding from "./pages/Onboarding";
import Header from "./components/Header";
import Footer from "./pages/Footer";
import MyTasks from "./components/MyTasks";
import MyTeamTasks from "./components/MyTeamTasks";
import Menu from "./pages/Menu";

import CSSBaseline from "@material-ui/core/CSSBaseline";

import AccountOnboarding from "./pages/AccountOnboarding";

function App() {
  return (
    // <div className="main">

    <CSSBaseline>
      <Router>
        <Header />
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Redirect exact from="/home" to="/home/mytasks" />
          <Route
            exact
            path="/home/:page?"
            render={(props) => <Home {...props} />}
          />

          <Route path="/reports" exact component={Reports} />
          <Route path="/reports/reports1" exact component={ReportsOne} />
          <Route path="/reports/reports2" exact component={ReportsTwo} />
          <Route path="/reports/reports3" exact component={ReportsThree} />
          <Route path="/onboarding" exact component={Onboarding} />

          <Route
            path="/accountOnboarding"
            exact
            component={AccountOnboarding}
          />
        </Switch>
      </Router>
    </CSSBaseline>
    //   <Footer/>
    //   </div>
  );
}

export default App;
