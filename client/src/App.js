import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import "./App.css";
import "../src/assets/scss/material-kit-react.scss?v=1.4.0";
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import GridContainer from "./components/Grid/GridContainer.jsx";
import GridItem from "./components/Grid/GridItem.jsx";
import HeaderLinks from "./components/Header/HeaderLinks.jsx";
import Parallax from "./components/Parallax/Parallax.jsx";

import landingPageStyle from "./assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import Search from "./pages/Sections/Search.jsx";
import Saved from "./pages/Sections/Saved.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const dashboardRoutes = [];

class App extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <Router>
        <div>
          <Header
            color="transparent"
            routes={dashboardRoutes}
            brand="Google Books Search"
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
              height: 400,
              color: "white"
            }}
            {...rest}
          />
          <Parallax filter image={require("./assets/img/landing-bg.jpg")}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <h1 className={classes.title}>React Google Book Search</h1>
                  <h4>Search for and save books of interest</h4>
                  <br />
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <Switch>
                <Route path="/saved" component={Saved} />
                <Route path="/" component={Search} />
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default withStyles(landingPageStyle)(App);