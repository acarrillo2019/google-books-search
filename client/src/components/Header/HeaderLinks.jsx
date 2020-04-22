/*eslint-disable*/
import React, { Component } from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import Button from "../CustomButtons/Button.jsx";

import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;

  return (
    <div>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Link to="/">
            <Button color="transparent" className={classes.navLink}>
              {" "}
              Search
            </Button>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link to="/saved">
            <Button color="transparent" className={classes.navLink}>
              Saved
            </Button>
          </Link>
        </ListItem>
      </List>
    </div>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
