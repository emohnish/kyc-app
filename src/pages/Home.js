import React from "react";
import { Tabs, Tab, AppBar, Divider } from "@material-ui/core";
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
          <Tab label="MyTasks1" />

          <Tab label="MyTeamTasks" />
        </Tabs>
      </AppBar>
      {selectedTab === 0 && <MyTasks />}
      {selectedTab === 1 && <MyTeamTasks />}

      <Nav
        variant="pills"
        
      >
        <Nav.Item>
          <Nav.Link eventKey="1" href="/rm-tagging">
            RM Tagging
              </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" href="/kyc-writeup">
            KYC Writeup
              </Nav.Link>
        </Nav.Item>
      </Nav>

    </div>
  );
};

export default Home;

