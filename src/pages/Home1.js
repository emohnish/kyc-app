import React from "react";
import { Tabs, Tab, AppBar,makeStyles,Typography, withTheme } from "@material-ui/core";
import MyTasks from "../components/MyTasks";
import MyTeamTasks from "../components/MyTeamTasks";
import '../styles/home.css';
//import { borderRadius } from "react-select/src/theme";
  const Home = props => {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const useStyles = makeStyles({
    header : {
      backgroundColor: "transparent",
      color: "white",
      boxShadow:"0px"
    },
    headerItem : {
      float : "left",
      display : "block",
      textDecoration: "none",
      padding : "7px 22px",
      borderRadius : "1px",
      color: "#666",
      backgroundColor: "#cccccc"
    }
  });
  const classes=useStyles();
  const tabNameToIndex = {
    0: "mytasks",
    1: "myteamtasks",
    2: "myrmapproval",
    3: "mylmapproval"
  };

  const indexToTabName = {
    mytasks: 0,
    myteamtasks: 1,
    myrmapproval:2,
    myrmapproval:3
  };

  const [selectedTab, setSelectedTab] = React.useState(0);
  const [selTabLabel,setSelTabLabel]  = React.useState('MYTASKS');
  const [selTabLabel1,setSelTabLabel1]  = React.useState('MYTEAM TASKS');
  const [selTabLabel2,setSelTabLabel2]  = React.useState('MYRM APPROVAL');
  const [selTabLabel3,setSelTabLabel3]  = React.useState('MYLM APPROVAL');

  const handleChange = (event, newValue) => {
    history.push(`/home/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  return (
    <div className="main">
      <AppBar position="static" className={classes.header}>
        <Tabs value={selectedTab} onChange={handleChange} className={classes.headerItem}>
          <Tab label={selTabLabel} />
          <Tab label={selTabLabel1} />
          <Tab label={selTabLabel2} />
        </Tabs>
      </AppBar>
      {selectedTab === 0 && <MyTasks selectedTab={selectedTab}/>}
      {selectedTab === 1 && <MyTasks selectedTab={selectedTab}/>}
      {selectedTab === 2 && <MyTasks selectedTab={selectedTab}/>}
    </div>
  );
};

export default Home;

 