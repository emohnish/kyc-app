import React from "react";
//import "../styles/header.css";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#c02d1a",
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
    color: "#CCCCCC",
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    //<div className="title">
    //   <h1>NOMURA</h1>
    //         <div className="Title-Subtitle"></div>
    // </div>

    <AppBar
      position="absolute"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          <h1>NOMURA</h1>
        </Typography>
        {/*
        <Link
          variant="button"
          color="textPrimary"
          href="#"
          className={classes.link}
        >
          Features
        </Link>
        <Link
          variant="button"
          color="textPrimary"
          href="#"
          className={classes.link}
        >
          Enterprise
        </Link>
        <Link
          variant="button"
          color="textPrimary"
          href="#"
          className={classes.link}
        >
          Support
        </Link>

        <Button
          href="#"
          color="primary"
          variant="outlined"
          className={classes.link}
        >
          Login
      </Button>*/}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
