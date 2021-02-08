import React, { useState } from "react";
import { AppBar, makeStyles, Typography, withTheme } from "@material-ui/core";
import MyTasks from "../components/MyTasks";
import MyTeamTasks from "../components/MyTeamTasks";
import "../styles/home.css";
import { Tabs, Tab, Content } from "./Tab";

//import { borderRadius } from "react-select/src/theme";
const Home = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const tabNameToIndex = {
    0: "mytasks",
    1: "myteamtasks",
    2: "myrmapproval",
    3: "mylmapproval",
  };

  const indexToTabName = {
    mytasks: 0,
    myteamtasks: 1,
    myrmapproval: 2,
    myrmapproval: 3,
  };

  const [selectedTab, setSelectedTab] = React.useState(0);
  const [selTabLabel, setSelTabLabel] = React.useState("MYTASKS");
  const [selTabLabel1, setSelTabLabel1] = React.useState("MYTEAM TASKS");
  const [selTabLabel2, setSelTabLabel2] = React.useState("MYRM APPROVAL");
  const [selTabLabel3, setSelTabLabel3] = React.useState("MYLM APPROVAL");

  const handleChange = (event, newValue) => {
    history.push(`/home/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };
  const [active, setActive] = useState(0);
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  return (
    <div className="main">
      {/* <AppBar position="static" >
        <Tabs value={selectedTab} onChange={handleChange} >
          <Tab label={selTabLabel} />
          <Tab label={selTabLabel1} />
          <Tab label={selTabLabel2} />
        </Tabs>
      </AppBar> */}

      <Tabs>
        <Tab onClick={handleClick} active={active === 0} id={0}>
          MY TASKS
        </Tab>

        <Tab onClick={handleClick} active={active === 1} id={1}>
          MYTEAM TASKS
        </Tab>
      </Tabs>
      {active === 0 && <MyTasks selectedTab={active} />}
      {active === 1 && <MyTasks selectedTab={active} />}
      {active === 2 && <MyTasks selectedTab={active} />}
    </div>
  );
};

export default Home;
