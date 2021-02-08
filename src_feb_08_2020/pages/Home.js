import React from "react";
import { Tabs, Tab, AppBar, Divider, Paper } from "@material-ui/core";
import MyTasks from "../components/MyTasks";
import MyTeamTasks from "../components/MyTeamTasks";
import '../styles/home.css';

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Col,
  Row,
} from "react-bootstrap";

const Home = props => {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const tabNameToIndex = {
    0: "mytasks",
    1: "myteamtasks"
  };

  const indexToTabName = {
    mytasks: 0,
    myteamtasks: 1
  };

  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    history.push(`/home/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  return (

    <div className="main">

      <AppBar position="static">
        <Tabs value={selectedTab} onChange={handleChange}>

          <Tab label="My Tasks" />

          <Tab label="My Team Tasks" />

        </Tabs>
      </AppBar>

      {selectedTab === 0 && <MyTasks />}
      {selectedTab === 1 && <MyTeamTasks />}



    </div>
  );
};

export default Home;

