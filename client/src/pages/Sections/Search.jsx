import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import Book from "../../components/Book/Book.jsx";
import Input from "@material-ui/core/Input";
import productStyle from "../../assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
import API from "../../utils/API";

class Search extends React.Component {
  state = {
    bookList: [],
    bookSearch: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    API.getBooks(this.state.bookSearch)
      .then(res => {
        this.setState({ bookList: res.data });
      })
      .catch(err => console.log(err));
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Search for a book by name</h2>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Input
              placeholder="Book title"
              name="bookSearch"
              onChange={this.handleInputChange}
              value={this.state.bookSearch}
              className="input"
            />
            <Button color="primary" onClick={this.handleSubmit}>
              Search
            </Button>
            {this.state.bookList.length ? (
              <h2 className={classes.title}>Here is what we found</h2>
            ) : (
              ""
            )}
          </GridItem>
          <div className={classes.section}>
            <div>
              <GridContainer>
                {this.state.bookList.map(item => {
                  return (
                    <Book
                      page="save"
                      key={item.id}
                      google_id={item.id}
                      title={
                        !item.volumeInfo.title ? "" : item.volumeInfo.title
                      }
                      link={
                        !item.accessInfo.webReaderLink
                          ? ""
                          : item.accessInfo.webReaderLink
                      }
                      description={
                        !item.volumeInfo.description
                          ? ""
                          : item.volumeInfo.description
                      }
                      authors={
                        !item.volumeInfo.authors ? "" : item.volumeInfo.authors
                      }
                      image={
                        !item.volumeInfo.imageLinks
                          ? require("../../assets/img/empty.png")
                          : item.volumeInfo.imageLinks.thumbnail
                      }
                      dbsaved={item.dbsaved}
                    />
                  );
                })}
              </GridContainer>
            </div>
          </div>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(Search);