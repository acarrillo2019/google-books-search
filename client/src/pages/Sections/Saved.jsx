import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from "../../components/Grid/GridContainer.jsx";
import Book from "../../components/Book/Book.jsx";

import teamStyle from "../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";
import API from "../../utils/API";

class Saved extends React.Component {
  state = {
    savedBooks: []
  };
  componentDidMount() {
    this.loadBooks();
  }
  loadBooks = () => {
    API.getSaved()
      .then(res => {
        this.setState({ savedBooks: res.data });
      })
      .catch(err => console.log(err));
  };
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Here are your saved books</h2>
        <div>
          <GridContainer>
            {this.state.savedBooks.map(item => {
              return (
                <Book
                  page="delete"
                  key={item._id}
                  id={item._id}
                  link={item.link}
                  description={item.description}
                  authors={item.authors}
                  image={item.image}
                  title={item.title}
                  onChange={this.loadBooks}
                />
              );
            })}
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(Saved);